import Get_In_Touch from "../components/Get_In_Touch";

const Home = () => {
  return (
    <div className="ml-[59px] flex  gap-[10rem]">
      <iframe
        src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3559.846637889497!2d80.98062567450238!3d26.844829763006285!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0xa3215c70c70bacf5%3A0xaa05a51007a5a463!2sTo-Let%20Globe%20-%20Headquarter%20in%20Lucknow!5e0!3m2!1sen!2sin!4v1725447199591!5m2!1sen!2sin"
        width="700"
        height="450"
        allowfullscreen
        loading="lazy"
        referrerPolicy="no-referrer-when-downgrade"
        className="rounded-lg mt-[45px]"
      ></iframe>

      <div className="mt-[25px]">
        <Get_In_Touch/>
      </div>
    </div>
  );
};
export default Home;
