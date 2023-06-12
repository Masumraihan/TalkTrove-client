import { useState } from "react";
import AddClassForm from "../../../Components/Dashboard/AddClassForm";
import { imageUpload } from "../../../Api/utils";
import useAxiosSecure from "../../../hooks/useAxiosSecure";
import { toast } from "react-hot-toast";
import { useNavigate } from "react-router-dom";
import { Helmet } from "react-helmet-async";

const AddClass = () => {
  const [axiosSecure] = useAxiosSecure();
  const [loading, setLoading] = useState(false);
  const [uploadButtonText, setUploadButtonText] = useState("Upload Image");
  const navigate = useNavigate();
  const handleSubmit = (e) => {
    setLoading(true);
    e.preventDefault();
    const form = e.target;
    const className = form.className.value;
    const image = form.image.files[0];
    const email = form.email.value;
    const name = form.instructorName.value;
    const price = form.price.value;
    const seats = form.seats.value;
    imageUpload(image).then((data) => {
      const image = data.data.display_url;
      const classInfo = {
        className,
        image,
        email,
        name,
        price: parseFloat(price),
        seats: parseInt(seats),
        status: "pending",
        date: new Date(),
        enrolledStudents: 0,
      };
      axiosSecure.post(`/classes/instructor`, classInfo).then((data) => {
        if (data.data.insertedId) {
          toast.success("Your Class added successfully");
          navigate("/dashboard/myClasses");
          setLoading(false);
        }
      });
      setLoading(false);
    });
  };

  const handleImageChange = (img) => {
    setUploadButtonText(img.name);
  };

  return (
    <div>
      <Helmet>
        <title>TalkTrove | Dashboard | Add-Class</title>
      </Helmet>
      <h1 className='text-4xl pb-4 text-center font-bold'>Add a Class</h1>
      <AddClassForm
        handleSubmit={handleSubmit}
        uploadButtonText={uploadButtonText}
        handleImageChange={handleImageChange}
        loading={loading}
      />
    </div>
  );
};

export default AddClass;
