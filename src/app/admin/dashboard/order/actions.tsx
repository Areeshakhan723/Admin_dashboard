import { client } from "@/sanity/lib/client";

export async function deleteOrder(orderId: string) {
  try {
    await client.delete(orderId);
    return { success: true };
  } catch (error) {
    console.error("Error deleting order:", error);
    return { success: false };
  }
}

export async function updateOrderStatus(orderId: string, newStatus: string) {
  try {
    await client
      .patch(orderId)
      .set({ orderStatus: newStatus })
      .commit();
    return { success: true };
  } catch (error) {
    console.error("Error updating order status:", error);
    return { success: false };
  }
}
