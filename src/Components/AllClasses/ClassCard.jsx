import { useContext } from "react";
import { AuthContext } from "../../Providers/AuthProviders";
import { useLocation, useNavigate } from "react-router-dom";
import useAxiosSecure from "../../hooks/useAxiosSecure";
import { toast } from "react-hot-toast";

const ClassCard = ({ classDetails }) => {
  const [axiosSecure] = useAxiosSecure();
  const { user, role } = useContext(AuthContext);
  const { image,className, instructor, price, name, seats, enrolledStudents, _id } = classDetails;
  const navigate = useNavigate();
  const location = useLocation();
  // TODO user can not select multiple classes
  const handleSelectClass = () => {
    if (!user) {
      navigate("/login", { state: { from: location } });
    }

    axiosSecure
      .post("/classes", {
        email: user?.email,
        name,
        className,
        image,
        instructor,
        price,
        classId: _id,
        selected_data: new Date(),
        status: "selected",
      })
      .then((data) => {
        if (data.data.insertedId) {
          toast.success("class added successfully");
        }
      });
  };

  return (
    <div
      className={`card w-full ${
        seats <= 0 ? "bg-red-500 text-white" : "bg-base-100"
      }  shadow-xl`}
    >
      <figure className='px-10  pt-10'>
        <img src={image} alt='Shoes' className='rounded-xl h-40' />
      </figure>
      <div className='card-body text-center'>
        <h2 className='card-title'>{className}</h2>
        <h2 className='card-title'>{name}</h2>
        <p className='text-start text-xl font-semibold'>{instructor}</p>
        <p className='text-start text-xl font-semibold'>
          Available seats : {seats}
        </p>
        <div className='card-actions items-center'>
          <p className='text-start text-xl font-semibold'>Price : ${price}</p>
          <p className='text-start text-xl font-semibold'>
            Students : {enrolledStudents}
          </p>
        </div>
        <button
          onClick={handleSelectClass}
          disabled={seats <= 0 || role === "admin" || role === "instructor"}
          className=' btn btn-primary'
        >
          Select
        </button>
      </div>
    </div>
  );
};

export default ClassCard;
