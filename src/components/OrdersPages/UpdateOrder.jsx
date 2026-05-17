import { useEffect } from 'react';
import CustomModal from '../ui/CustomModal';
import { useForm } from 'react-hook-form';
import { axiosInstance } from '../../api/axiosInstance';
import { toast } from 'react-toastify';

export default function UpdateOrder({
  show,
  order,
  onClose,
  setOrders,
}) {
  const { register, handleSubmit, reset } = useForm();

  // fill form with old data
  useEffect(() => {
    if (order) {
      reset({
        customerName: order.customerName || '',
        paymentMethod: order.paymentMethod || 'cash',
        orderType: order.orderType || 'takeaway',
        status: order.status || 'pending',
      });
    }
  }, [order, reset]);

  // update order
  const onSubmit = async (data) => {
    try {
      // api update
      await axiosInstance.put(`/order/${order._id}`, data);

      // update ui
      setOrders((prevOrders) =>
        prevOrders.map((o) =>
          o._id === order._id
            ? { ...o, ...data }
            : o
        )
      );

      toast.success('Order updated successfully');
      onClose();
    } catch (err) {
      console.log(err);
      toast.error(err.response?.data?.message || 'Failed to update order');
    }
  };

  return (
    <CustomModal
      show={show}
      onClose={onClose}
      title="Update Order"
    >
      <form onSubmit={handleSubmit(onSubmit)}>
        {/* Customer Name */}
        <label className="form-label fw-bold">Customer Name</label>
        <input
          className="form-control mb-3"
          placeholder="Customer Name"
          {...register('customerName')}
        />

        {/* Payment Method */}
        <label className="form-label fw-bold">Payment Method</label>
        <select className="form-select mb-3" {...register('paymentMethod')}>
          <option value="cash">Cash</option>
          <option value="card">Card</option>
        </select>

        {/* Order Type */}
        <label className="form-label fw-bold">Order Type</label>
        <select className="form-select mb-3" {...register('orderType')}>
          <option value="takeaway">Takeaway</option>
          <option value="dine-in">Dine-in</option>
          <option value="delivery">Delivery</option>
        </select>

        {/* Status */}
        <label className="form-label fw-bold">Status</label>
        <select className="form-select mb-3" {...register('status')}>
          <option value="pending">Pending (قيد الانتظار)</option>
          <option value="preparing">Preparing (جاري التجهيز)</option>
          <option value="ready">Ready (جاهز)</option>
          <option value="out_for_delivery">Out for Delivery (في الطريق)</option>
          <option value="delivered">Delivered (تم التوصيل)</option>
          <option value="completed">Completed (مكتمل)</option>
          <option value="cancelled">Cancelled (ملغي)</option>
        </select>

        {/* submit */}
        <button className="btn btn-primary w-100">
          Save Changes
        </button>
      </form>
    </CustomModal>
  );
}
