import { wixClientServer } from "@/lib/wixClientServer";
import Link from "next/link";
import { notFound } from "next/navigation";

const OrderPage = async ({ params }: { params: { id: string } }) => {
  const id = params.id;

  const wixClient = await wixClientServer();

  let order;

  try {
    order = await wixClient.orders.getOrder(id);
  } catch (err) {
    return notFound();
  }

  

  return <div className="flex flex-col h-[calc(100vh-180px)] items-center justify-center">
    <h1 className="text-2xl">Details</h1>

    <div>
      <span className="font-medium">Order Id:</span>
      <span>{order._id}</span>
    </div>

    <div>
      <span className="font-medium">Name:</span>
      <span>{order.billingInfo?.contactDetails?.firstName + ""} {order.billingInfo?.contactDetails?.lastName}</span>
    </div>

    <div>
      <span className="font-medium">Email:</span>
      <span>{order.buyerInfo?.email}</span>
    </div>

    <div>
      <span className="font-medium">$:</span>
      <span>{order.priceSummary?.subtotal?.amount}</span>
    </div>

    <div>
      <span className="font-medium">Payment Status:</span>
      <span>{order.paymentStatus}</span>
    </div>

    <div>
      <span className="font-medium">Order Status:</span>
      <span>{order.status}</span>
    </div>

    <div>
      <span className="font-medium">Address:</span>
      <span>{order.billingInfo?.address?.addressLine1 + " "} {order.billingInfo?.address?.city}</span>
    </div>

    <Link href='/' className="underline mt-6">
      Some problem? Contatc us.
    </Link>
  </div>;
};

export default OrderPage;
