import { format } from "date-fns";

const PaymentHistoryRow = ({ classDetails }) => {
  const { className, price, date, name,transactionId } = classDetails;
  return (
    <tr>
      <td className='px-5 py-5 border-b border-gray-200 bg-base-200 text-sm'>
        <p className='text-gray-900 whitespace-no-wrap'>{className}</p>
      </td>
      <td className='px-5 py-5 border-b border-gray-200 bg-base-200 text-sm'>
        <p className='text-gray-900 whitespace-no-wrap'>${price}</p>
      </td>
      <td className='px-5 py-5 border-b border-gray-200 bg-base-200 text-sm'>
        <p className='text-gray-900 whitespace-no-wrap'>
          {format(new Date(date), "dd-MM-yyyy hh:mm a")}
        </p>
      </td>
      <td className='px-5 py-5 border-b border-gray-200 bg-base-200 text-sm'>
        <p className='text-gray-900 whitespace-no-wrap'>
          {transactionId}
        </p>
      </td>
      <td className='px-5 py-5 border-b border-gray-200 bg-base-200 text-sm'>
        <p className='text-gray-900 whitespace-no-wrap'>{name}</p>
      </td>
    </tr>
  );
};

export default PaymentHistoryRow;
