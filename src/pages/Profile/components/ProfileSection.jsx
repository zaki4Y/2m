import React, { useState } from "react";
import mm from "../../../assets/img/mm.jpg";
import { useParams } from "react-router-dom";
import AOS from "aos";
import "aos/dist/aos.css";
AOS.init();

export const ProfileSection = () => {
  const { id } = useParams();
  const [MyName, setMyName] = useState([
    {
      id: 1,
      Name: "Mohammed BENNAOUI",
      images: mm,
      discription: "TRANSMISSION",
      firstname: "Mohammed",
      lastname: "BENNAOUI",
      dateofbirt: "21/02/199x",
      gender: "Male",
      location: "Maroc, Casablanca",
      email: "agagag@gmail.com",
      phone: "0600000000",
    },

    {
      id: 2,
      Name: "Adil LYAMANI",
      images: mm,
      discription: "TRANSMISSION",
      firstname: "Adil",
      lastname: "LYAMANI",
      dateofbirt: "21/02/199x",
      gender: "Male",
      location: "Maroc, Casablanca",
      email: "agagag@gmail.com",
      phone: "0600000000",
    },

    {
      id: 3,
      Name: "Mohammed MOUNKID",
      images: mm,
      discription: "TRANSMISSION",
      firstname: "Mohammed",
      lastname: "MOUNKID",
      dateofbirt: "21/02/199x",
      gender: "Male",
      location: "Maroc, Casablanca",
      email: "agagag@gmail.com",
      phone: "0600000000",
    },

    {
      id: 4,
      Name: "Morad GAOUT",
      images: mm,
      discription: "TRANSMISSION",
      firstname: "Morad",
      lastname: "GAOUT",
      dateofbirt: "21/02/199x",
      gender: "Male",
      location: "Maroc, Casablanca",
      email: "agagag@gmail.com",
      phone: "0600000000",
    },

    {
      id: 5,
      Name: "Karim EL IDRISSI",
      images: mm,
      discription: "TRANSMISSION",
      firstname: "karim",
      lastname: "EL IDRISSI",
      dateofbirt: "21/02/199x",
      gender: "Male",
      location: "Maroc, Casablanca",
      email: "agagag@gmail.com",
      phone: "0600000000",
    },

    {
      id: 6,
      Name: "Abdelletif AARAB",
      images: mm,
      discription: "TRANSMISSION",
      firstname: "Abdelletif",
      lastname: "AARAB",
      dateofbirt: "21/02/199x",
      gender: "Male",
      location: "Maroc, Casablanca",
      email: "agagag@gmail.com",
      phone: "0600000000",
    },

    {
      id: 7,
      Name: "Aidi SADEQ",
      images: mm,
      discription: "TRANSMISSION",
      firstname: "Aidi",
      lastname: "SADEQ",
      dateofbirt: "21/02/199x",
      gender: "Male",
      location: "Maroc, Casablanca",
      email: "agagag@gmail.com",
      phone: "0600000000",
    },

    {
      id: 8,
      Name: "Hakim KAZZOUZ",
      images: mm,
      discription: "TRANSMISSION",
      firstname: "Hakim",
      lastname: "KAZZOUZ",
      dateofbirt: "21/02/199x",
      gender: "Male",
      location: "Maroc, Casablanca",
      email: "agagag@gmail.com",
      phone: "0600000000",
    },

    {
      id: 9,
      Name: "Adil ZNIBER",
      images: mm,
      discription: "TRANSMISSION",
      firstname: "Adil",
      lastname: "ZNIBER",
      dateofbirt: "21/02/199x",
      gender: "Male",
      location: "Maroc, Casablanca",
      email: "agagag@gmail.com",
      phone: "0600000000",
    },

    {
      id: 10,
      Name: "Mohcine IDSIHAMMOU",
      images: mm,
      discription: "TRANSMISSION",
      firstname: "Mohcine",
      lastname: "IDSIHAMMOU",
      dateofbirt: "21/02/199x",
      gender: "Male",
      location: "Maroc, Casablanca",
      email: "agagag@gmail.com",
      phone: "0600000000",
    },

    {
      id: 11,
      Name: "El Mehdi SAMOTA",
      images: mm,
      discription: "TRANSMISSION",
      firstname: "El Mehdi",
      lastname: "SAMOTA",
      dateofbirt: "21/02/199x",
      gender: "Male",
      location: "Maroc, Casablanca",
      email: "agagag@gmail.com",
      phone: "0600000000",
    },

    {
      id: 12,
      Name: "Abdellatif SALMANE",
      images: mm,
      discription: "TRANSMISSION",
      firstname: "Abdellatif",
      lastname: "SALMANE",
      dateofbirt: "21/02/199x",
      gender: "Male",
      location: "Maroc, Casablanca",
      email: "agagag@gmail.com",
      phone: "0600000000",
    },

    {
      id: 13,
      Name: "Mohamed MAHRAOUI",
      images: mm,
      discription: "TRANSMISSION",
      firstname: "Mohammed",
      lastname: "MAHRAOUI",
      dateofbirt: "21/02/199x",
      gender: "Male",
      location: "Maroc, Casablanca",
      email: "agagag@gmail.com",
      phone: "0600000000",
    },

    {
      id: 14,
      Name: "Mohamed SABIL",
      images: mm,
      discription: "TRANSMISSION",
      firstname: "Mohammed",
      lastname: "SABIL",
      dateofbirt: "21/02/199x",
      gender: "Male",
      location: "Maroc, Casablanca",
      email: "agagag@gmail.com",
      phone: "0600000000",
    },

    {
      id: 15,
      Name: "Ilyas JEBBOUJI",
      images: mm,
      discription: "TRANSMISSION",
      firstname: "Ilyas",
      lastname: "JEBBOUJI",
      dateofbirt: "21/02/199x",
      gender: "Male",
      location: "Maroc, Casablanca",
      email: "agagag@gmail.com",
      phone: "0600000000",
    },
  ]);

  let Profil = MyName.find((element) => element.id == id);
  console.log(Profil);

  return (
    <>
      <body>
        <section className="w-full overflow-hidden dark:bg-gray-900">
          <div className="flex flex-col">
            {/* Cover Image */}
            <img
              src="https://images.unsplash.com/photo-1451187580459-43490279c0fa?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w0NzEyNjZ8MHwxfHNlYXJjaHw5fHxjb3ZlcnxlbnwwfDB8fHwxNzEwNzQxNzY0fDA&ixlib=rb-4.0.3&q=80&w=1080"
              alt="User Cover"
              className="w-full xl:h-[20rem] lg:h-[18rem] md:h-[16rem] sm:h-[14rem] xs:h-[11rem]"
            />
            {/* Profile Image */}
            <div className="sm:w-[80%] xs:w-[90%] mx-auto flex">
              <img
                src={mm}
                width={500}
                className="rounded-md lg:w-[15vw] lg:h-[25vh] w-[25vw] h-[15vh] outline outline-2 outline-offset-2 outline-blue-500 relative lg:bottom-[5rem] sm:bottom-[4rem] xs:bottom-[3rem] "
              />
              {/* FullName */}
              <h1 className="w-full text-left my-4 sm:mx-4 xs:pl-4 text-gray-800 dark:text-white lg:text-4xl md:text-3xl sm:text-3xl xs:text-xl font-serif lg:p-0 p-5">
                {Profil.Name}
              </h1>
            </div>
            <div
              // data-aos="fade-up"
              // data-aos-offset="200"
              // data-aos-delay="100"
              // data-aos-duration="1000"
              // data-aos-easing="ease-in-out"
              // data-aos-mirror="true"
              // data-aos-once="false"
              className="xl:w-[80%] lg:w-[90%] md:w-[90%] sm:w-[92%] xs:w-[90%] mx-auto flex flex-col gap-4 items-center relative lg:-top-8 md:-top-6 sm:-top-4 xs:-top-4 lg:p-0 p-2"
            >
              {/* Description */}
              <p className="w-fit text-gray-700 dark:text-gray-400 text-md">
                Lorem, ipsum dolor sit amet consectetur adipisicing elit.
                Quisquam debitis labore consectetur voluptatibus mollitia
                dolorem veniam omnis ut quibusdam minima sapiente repellendus
                asperiores explicabo, eligendi odit, dolore similique fugiat
                dolor, doloremque eveniet. Odit, consequatur. Ratione voluptate
                exercitationem hic eligendi vitae animi nam in, est earum culpa
                illum aliquam.
              </p>
              {/* Detail */}
              <div className="w-full my-auto py-6 flex flex-col justify-center gap-2">
                <div className="w-full flex sm:flex-row xs:flex-col gap-2 justify-center">
                  <div className="w-full">
                    <dl className="text-gray-900 divide-y divide-gray-200 dark:text-white dark:divide-gray-700">
                      <div className="flex flex-col pb-3">
                        <dt className="mb-1 text-gray-500 md:text-lg dark:text-gray-400">
                          First Name
                        </dt>
                        <dd className="text-lg font-semibold">
                          {" "}
                          {Profil.firstname}
                        </dd>
                      </div>
                      <div className="flex flex-col py-3">
                        <dt className="mb-1 text-gray-500 md:text-lg dark:text-gray-400">
                          Last Name
                        </dt>
                        <dd className="text-lg font-semibold">
                          {" "}
                          {Profil.lastname}
                        </dd>
                      </div>
                      <div className="flex flex-col py-3">
                        <dt className="mb-1 text-gray-500 md:text-lg dark:text-gray-400">
                          Date Of Birth
                        </dt>
                        <dd className="text-lg font-semibold">
                          {" "}
                          {Profil.dateofbirt}
                        </dd>
                      </div>
                      <div className="flex flex-col py-3">
                        <dt className="mb-1 text-gray-500 md:text-lg dark:text-gray-400">
                          Gender
                        </dt>
                        <dd className="text-lg font-semibold">Male</dd>
                      </div>
                    </dl>
                  </div>
                  <div className="w-full">
                    <dl className="text-gray-900 divide-y divide-gray-200 dark:text-white dark:divide-gray-700">
                      <div className="flex flex-col pb-3">
                        <dt className="mb-1 text-gray-500 md:text-lg dark:text-gray-400">
                          Location
                        </dt>
                        <dd className="text-lg font-semibold">
                          {" "}
                          {Profil.location}
                        </dd>
                      </div>
                      <div className="flex flex-col pt-3">
                        <dt className="mb-1 text-gray-500 md:text-lg dark:text-gray-400">
                          Phone Number
                        </dt>
                        <dd className="text-lg font-semibold">
                          {" "}
                          {Profil.phone}
                        </dd>
                      </div>
                      <div className="flex flex-col pt-3">
                        <dt className="mb-1 text-gray-500 md:text-lg dark:text-gray-400">
                          Email
                        </dt>
                        <dd className="text-lg font-semibold">
                          {Profil.email}
                        </dd>
                      </div>
                      <div className="flex flex-col pt-3">
                        <dt className="mb-1 text-gray-500 md:text-lg dark:text-gray-400">
                          Website
                        </dt>
                        <dd className="text-lg font-semibold">
                          https://mcr-2m.vercel.app
                        </dd>
                      </div>
                    </dl>
                  </div>
                </div>
              </div>
              {/* Social Links */}
              <div className="fixed right-2 bottom-20 flex flex-col rounded-sm bg-gray-200 text-gray-500 dark:bg-gray-200/80 dark:text-gray-700 hover:text-gray-600 hover:dark:text-gray-400">
                <a href="https://www.linkedin.com/in/samuel-abera-6593a2209/">
                  <div className="p-2 hover:text-primary hover:dark:text-primary">
                    <svg
                      className="lg:w-6 lg:h-6 xs:w-4 xs:h-4 text-blue-500"
                      aria-hidden="true"
                      xmlns="http://www.w3.org/2000/svg"
                      width={24}
                      height={24}
                      fill="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path
                        fillRule="evenodd"
                        d="M12.51 8.796v1.697a3.738 3.738 0 0 1 3.288-1.684c3.455 0 4.202 2.16 4.202 4.97V19.5h-3.2v-5.072c0-1.21-.244-2.766-2.128-2.766-1.827 0-2.139 1.317-2.139 2.676V19.5h-3.19V8.796h3.168ZM7.2 6.106a1.61 1.61 0 0 1-.988 1.483 1.595 1.595 0 0 1-1.743-.348A1.607 1.607 0 0 1 5.6 4.5a1.601 1.601 0 0 1 1.6 1.606Z"
                        clipRule="evenodd"
                      />
                      <path d="M7.2 8.809H4V19.5h3.2V8.809Z" />
                    </svg>
                  </div>
                </a>
                <a href="https://twitter.com/Samuel7Abera7">
                  <div className="p-2 hover:text-primary hover:dark:text-primary">
                    <svg
                      className="lg:w-6 lg:h-6 xs:w-4 xs:h-4 text-gray-900"
                      aria-hidden="true"
                      xmlns="http://www.w3.org/2000/svg"
                      width={24}
                      height={24}
                      fill="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path d="M13.795 10.533 20.68 2h-3.073l-5.255 6.517L7.69 2H1l7.806 10.91L1.47 22h3.074l5.705-7.07L15.31 22H22l-8.205-11.467Zm-2.38 2.95L9.97 11.464 4.36 3.627h2.31l4.528 6.317 1.443 2.02 6.018 8.409h-2.31l-4.934-6.89Z" />
                    </svg>
                  </div>
                </a>
                <a href="">
                  <div className="p-2 hover:text-blue-500 hover:dark:text-blue-500">
                    <svg
                      className="lg:w-6 lg:h-6 xs:w-4 xs:h-4 text-blue-700"
                      aria-hidden="true"
                      xmlns="http://www.w3.org/2000/svg"
                      width={24}
                      height={24}
                      fill="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path
                        fillRule="evenodd"
                        d="M13.135 6H15V3h-1.865a4.147 4.147 0 0 0-4.142 4.142V9H7v3h2v9.938h3V12h2.021l.592-3H12V6.591A.6.6 0 0 1 12.592 6h.543Z"
                        clipRule="evenodd"
                      />
                    </svg>
                  </div>
                </a>
                <a href="https://www.youtube.com/@silentcoder7">
                  <div className="p-2 hover:text-primary hover:dark:text-primary">
                    <svg
                      className="lg:w-6 lg:h-6 xs:w-4 xs:h-4 text-red-600"
                      aria-hidden="true"
                      xmlns="http://www.w3.org/2000/svg"
                      width={24}
                      height={24}
                      fill="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path
                        fillRule="evenodd"
                        d="M21.7 8.037a4.26 4.26 0 0 0-.789-1.964 2.84 2.84 0 0 0-1.984-.839c-2.767-.2-6.926-.2-6.926-.2s-4.157 0-6.928.2a2.836 2.836 0 0 0-1.983.839 4.225 4.225 0 0 0-.79 1.965 30.146 30.146 0 0 0-.2 3.206v1.5a30.12 30.12 0 0 0 .2 3.206c.094.712.364 1.39.784 1.972.604.536 1.38.837 2.187.848 1.583.151 6.731.2 6.731.2s4.161 0 6.928-.2a2.844 2.844 0 0 0 1.985-.84 4.27 4.27 0 0 0 .787-1.965 30.12 30.12 0 0 0 .2-3.206v-1.516a30.672 30.672 0 0 0-.202-3.206Zm-11.692 6.554v-5.62l5.4 2.819-5.4 2.801Z"
                        clipRule="evenodd"
                      />
                    </svg>
                  </div>
                </a>
              </div>
            </div>
          </div>
        </section>
      </body>
    </>
  );
};
