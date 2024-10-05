import axios from "axios";

export const handlePayment = async (
  treeCount,
  name,
  email,
  number,
  address,
  setPaymentStatus
) => {
  try {
    const response = await axios.post("https://plant.wegrowforest.org/api/create/order", {
      treeCount,
    });
    const orderData = response.data;
    if (!orderData) return;
    const options = {
      key: import.meta.env.VITE_RAZORPAY_KEY, // replace with your Razorpay Key ID
      amount: orderData.amount, // order amount
      currency: "INR",
      name: "We Grow Forest Foundation",
      description: "Donation for planting trees",
      order_id: orderData.id, // order ID created in backend
      handler: async (response) => {
        const paymentStatus = await verifyPayment(
          response.razorpay_order_id,
          response.razorpay_payment_id,
          response.razorpay_signature
        );
        if (paymentStatus.success) {
          setPaymentStatus(true);
        }
      },
      prefill: {
        name,
        email,
        contact: number,
      },
      notes: {
        address,
      },
      theme: {
        color: "#F37254",
      },
    };
    const rzp1 = new Razorpay(options);
    rzp1.on("payment.failed", function (response) {
      // alert(response.error.code);
      // alert(response.error.description);
      // alert(response.error.source);
      // alert(response.error.step);
      // alert(response.error.reason);
      // alert(response.error.metadata.order_id);
      // alert(response.error.metadata.payment_id);
    });
    return rzp1;
  } catch (error) {
    throw error;
  }
};

const verifyPayment = async (
    razorpay_order_id,
    razorpay_payment_id,
    razorpay_signature
  ) => {
    try {
      const response = await axios.post("https://plant.wegrowforest.org/api/payment/verify", {
        razorpay_order_id,
        razorpay_payment_id,
        razorpay_signature,
      });
      return response.data; // Make sure this returns { success: true/false }
    } catch (error) {
      throw error;
      return { success: false }; // Return false in case of an error
    }
  };