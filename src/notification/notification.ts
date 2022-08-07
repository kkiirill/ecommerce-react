import { toast } from 'react-toastify';
export const diffToast = () => {
    toast.success("Great, your product has been added to the cart!", {
      position: "top-right",
    });
  };