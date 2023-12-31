require("dotenv").config()
const admin = require("firebase-admin");
const serviceAccount = require("./serviceAccountKey.json")
const express = require("express");
const app = express()
const cors = require("cors");
const bodyParser = require("body-parser");
const moment = require("moment");
const port = 5000

app.use(express.json())
app.use(bodyParser.json())

const [Unavailable, Manager, EyeRed] = ['price_1NrUytKYi2oHdHBm8eOqiwJV', 'price_1NrV5SKYi2oHdHBmxVHYLiKk', 'price_1NrV73KYi2oHdHBmYUQ6uWw0'];

admin.initializeApp({
  credential: admin.credential.cert(serviceAccount),
  databaseURL: "https://kin-go-learn-default-rtdb.firebaseio.com"
});

app.use(
  cors({
    origin: "http://localhost:5173"
  })
)



/**********Create_Checkout_Session**********/

const stripe = require("stripe")(process.env.STRIPE_PRIVATE_KEY)


const stripeSession = async (plan) => {
  try {
    const session = await stripe.checkout.sessions.create({
      mode: "subscription",
      payment_method_types: ["card"],
      line_items: [
        {
          price: plan,
          quantity: 1
        },
      ],
      success_url: "http://localhost:5173/success",
      cancel_url: "http://localhost:5173/cancel"
    });
    return session;
  } catch (e) {
    return e;
  }
}

app.post("/api/v1/create-subscription-checkout-session", async (req, res) => {
  const { plan, customerId } = req.body;
  let planId = null;
  if (plan == 99) planId = Unavailable;
  else if (plan == 129) planId = Manager;
  else if (plan == 149) planId = EyeRed;

  try {
    const session = await stripeSession(planId);
    const user = await admin.auth().getUser(customerId);

    await admin.database().ref("users").child(user.uid).update({
      subscription: {
        sessionId: session.id
      }
    });
    console.log(session);
    return res.json({ session })
  }
  catch (error) {
    res.send(error)
  }
})




/**********Payment_Successful**********/

app.post("/api/v1/payment-success", async (req, res) => {

  const { sessionId, firebaseId } = req.body

  try {
    const session = await stripe.checkout.sessions.retrieve(sessionId);
    if (session.payment_status === "paid") {
      const subscriptionId = session.subscription;

      try {
        const subscription = await stripe.subscriptions.retrieve(subscriptionId);
        const user = await admin.auth().getUser(firebaseId);
        const planId = subscription.plan.id;
        const planType = "";
        if (subscription.plan.amount === 9900) planType = "Unavailable";
        else if (subscription.plan.amount === 12900) planType = "Manager";
        else if (subscription.plan.amount === 14900) planType = "EyeRed";

        const startDate = moment.unix(subscription.current_period_start).format('DD-MM-YYYY');
        const endDate = moment.unix(subscription.current_period_end).format('DD-MM-YYYY');
        const durationInSeconds = subscription.current_period_end - subscription.current_period_start;
        const durationInDays = moment.duration(durationInSeconds, 'seconds').asDays();

        await admin.database().ref("users").child(user.uid).update({
          subscription: {
            sessionId: null,
            planId: planId,
            planType: planType,
            planStartDate: startDate,
            planEndDate: endDate,
            planDuration: durationInDays,
          }
        })

      } catch (error) {
        alert("Error retrieving subscription", error);
      }

      return res.json({ message: "Payment successful" });
    } else {
      return res.json({ message: "Payment declined" });
    }

  } catch (error) {
    res.send(error);
  }
})


app.listen(port, () => {
  console.log(`Now listenig on port ${port}`);
})

