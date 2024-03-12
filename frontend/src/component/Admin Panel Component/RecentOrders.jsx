import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { toast } from "react-toastify";
const recentOrderData = [
  {
    id: "1",
    product_id: "4324",
    customer_id: "23143",
    customer_name: "Shirley A. Lape",
    order_date: "2022-05-17T03:24:00",
    order_total: "$435.50",
    current_order_status: "PLACED",
    shipment_address: "Cottage Grove, OR 97424",
  },
  {
    id: "7",
    product_id: "7453",
    customer_id: "96453",
    customer_name: "Ryan Carroll",
    order_date: "2022-05-14T05:24:00",
    order_total: "$96.35",
    current_order_status: "CONFIRMED",
    shipment_address: "Los Angeles, CA 90017",
  },
  {
    id: "2",
    product_id: "5434",
    customer_id: "65345",
    customer_name: "Mason Nash",
    order_date: "2022-05-17T07:14:00",
    order_total: "$836.44",
    current_order_status: "SHIPPED",
    shipment_address: "Westminster, CA 92683",
  },
  {
    id: "3",
    product_id: "9854",
    customer_id: "87832",
    customer_name: "Luke Parkin",
    order_date: "2022-05-16T12:40:00",
    order_total: "$334.50",
    current_order_status: "SHIPPED",
    shipment_address: "San Mateo, CA 94403",
  },
  {
    id: "4",
    product_id: "8763",
    customer_id: "09832",
    customer_name: "Anthony Fry",
    order_date: "2022-05-14T03:24:00",
    order_total: "$876.00",
    current_order_status: "OUT_FOR_DELIVERY",
    shipment_address: "San Mateo, CA 94403",
  },
  {
    id: "5",
    product_id: "5627",
    customer_id: "97632",
    customer_name: "Ryan Carroll",
    order_date: "2022-05-14T05:24:00",
    order_total: "$96.35",
    current_order_status: "DELIVERED",
    shipment_address: "Los Angeles, CA 90017",
  },
];

export default function RecentOrders() {
  const [dataSource, setDataSource] = useState([]);
  const [loading, setLoading] = useState(false);

  const REACT_APP_MY_STRIPE_SECRET_KEY =
    process.env.REACT_APP_MY_STRIPE_SECRET_KEY;

  useEffect(() => {
    const fetchData = async () => {
      setLoading(true);

      try {
        const response = await fetch(
          `https://api.stripe.com/v1/payment_intents`,
          {
            method: "GET",
            headers: {
              Authorization: `Bearer ${REACT_APP_MY_STRIPE_SECRET_KEY}`,
            },
          }
        );

        if (response.ok) {
          const { data } = await response.json();
          setDataSource(data);
        } else {
          toast.error("Veri getirme başarısız.");
        }
      } catch (error) {
        console.log("Veri hatası:", error);
      } finally {
        setLoading(false);
      }
    };
    fetchData();
  }, [REACT_APP_MY_STRIPE_SECRET_KEY]);

  return (
    <div className="bg-white   dark:bg-gray-900  px-4 pt-3 pb-4 rounded-sm flex-1">
      <div className="border-x border-gray-200 rounded-sm mt-3">
        <table className="w-full  text-gray-700">
          <thead>
            <tr className="text-2xl border dark:border-yellow-500">
              <th className="dark:text-gray-200">ID</th>
              <th className="dark:text-gray-200">Order ID</th>
              <th className="dark:text-gray-200">Customer Email</th>
              <th className="dark:text-gray-200">Order Status</th>
              <th className="dark:text-gray-200">Order Total</th>
            </tr>
          </thead>
          <tbody>
            {dataSource.map((order, index) => (
              <tr className="text-xl border dark:border-yellow-500 dark:text-gray-200" key={order.id}>
                <td className=" text-center">
                  <Link>#{index}</Link>
                </td>
                <td className=" text-center ">
                  <Link>#{order.id}</Link>
                </td>
                <td className=" text-center">
                  <Link>{order.receipt_email}</Link>
                </td>
                <td className="text-center">
                  <Link>{order.status}</Link>
                </td>
                <td className="text-center">
                  <Link>${(order.amount / 100).toFixed(2)}</Link>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}
