import React, { useState } from "react";
import mm from "../../../assets/img/mm.jpg";
import AOS from "aos";
import "aos/dist/aos.css"; // You can also use <link> for styles
import { useNavigate } from "react-router-dom";
// ..
AOS.init();

export const TeamsSection = () => {
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
      email: "mounkidmohammed1963@gmail.com",
      phone: "0661665483",
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
  const navigate = useNavigate();
  return (
    <>
      <body className="dark">
        <div
          data-aos="fade-up"
          data-aos-offset="200"
          data-aos-delay="100"
          data-aos-duration="1000"
          data-aos-easing="ease-in-out"
          data-aos-mirror="true"
          data-aos-once="false"
          data-aos-anchor-placement="top-center"
          class="font-[sans-serif] max-w-5xl max-lg:max-w-4xl  max-sm:max-w-sm mx-auto  p-5"
        >
          <div class="max-w-2xl mx-auto text-center">
            <h2 class="text-[#5FC2BA] text-3xl font-extrabold ">
              Meet our team
            </h2>
            <p class="text-[#5FC2BA] text-sm mt-4 leading-relaxed">
              Meet our team of professionals to serve you.
            </p>
          </div>

          <div class="grid lg:grid-cols-4 md:grid-cols-3 sm:grid-cols-2 gap-x-6 gap-y-16 text-center mt-24">
            {MyName.map((element, index) => (
              <>
                <div class="bg-gray-200 relative rounded" key={index}>
                  <img
                    src={element.images}
                    class="w-32 h-32 rounded-full inline-block -mt-12"
                  />

                  <div class="py-4">
                    <h4
                    // onClick={()=>{navigate(`/about/${element.title}`)}}

                      onClick={() => {navigate(`/Profile/${element.id}`)}}
                      class="text-[#B67332] text-base font-extrabold cursor-pointer"
                    >
                      {element.Name}
                    </h4>
                    <p class="text-[#00353F] text-bold  mt-1  ">
                      {element.discription}
                    </p>

                    <div class="space-x-4 mt-4">
                      <button
                        type="button"
                        class="w-7 h-7 inline-flex items-center justify-center rounded-full border-none outline-none bg-gray-100 hover:bg-gray-200"
                      >
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          width="12px"
                          class="fill-gray-800"
                          viewBox="0 0 155.139 155.139"
                        >
                          <path
                            d="M89.584 155.139V84.378h23.742l3.562-27.585H89.584V39.184c0-7.984 2.208-13.425 13.67-13.425l14.595-.006V1.08C115.325.752 106.661 0 96.577 0 75.52 0 61.104 12.853 61.104 36.452v20.341H37.29v27.585h23.814v70.761h28.48z"
                            data-original="#010002"
                          />
                        </svg>
                      </button>
                      <button
                        type="button"
                        class="w-7 h-7 inline-flex items-center justify-center rounded-full border-none outline-none  bg-gray-100 hover:bg-gray-200"
                      >
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          width="12px"
                          class="fill-gray-800"
                          viewBox="0 0 512 512"
                        >
                          <path
                            d="M512 97.248c-19.04 8.352-39.328 13.888-60.48 16.576 21.76-12.992 38.368-33.408 46.176-58.016-20.288 12.096-42.688 20.64-66.56 25.408C411.872 60.704 384.416 48 354.464 48c-58.112 0-104.896 47.168-104.896 104.992 0 8.32.704 16.32 2.432 23.936-87.264-4.256-164.48-46.08-216.352-109.792-9.056 15.712-14.368 33.696-14.368 53.056 0 36.352 18.72 68.576 46.624 87.232-16.864-.32-33.408-5.216-47.424-12.928v1.152c0 51.008 36.384 93.376 84.096 103.136-8.544 2.336-17.856 3.456-27.52 3.456-6.72 0-13.504-.384-19.872-1.792 13.6 41.568 52.192 72.128 98.08 73.12-35.712 27.936-81.056 44.768-130.144 44.768-8.608 0-16.864-.384-25.12-1.44C46.496 446.88 101.6 464 161.024 464c193.152 0 298.752-160 298.752-298.688 0-4.64-.16-9.12-.384-13.568 20.832-14.784 38.336-33.248 52.608-54.496z"
                            data-original="#03a9f4"
                          />
                        </svg>
                      </button>
                      <button
                        type="button"
                        class="w-7 h-7 inline-flex items-center justify-center rounded-full border-none outline-none  bg-gray-100 hover:bg-gray-200"
                      >
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          width="14px"
                          class="fill-gray-800"
                          viewBox="0 0 24 24"
                        >
                          <path
                            d="M23.994 24v-.001H24v-8.802c0-4.306-.927-7.623-5.961-7.623-2.42 0-4.044 1.328-4.707 2.587h-.07V7.976H8.489v16.023h4.97v-7.934c0-2.089.396-4.109 2.983-4.109 2.549 0 2.587 2.384 2.587 4.243V24zM.396 7.977h4.976V24H.396zM2.882 0C1.291 0 0 1.291 0 2.882s1.291 2.909 2.882 2.909 2.882-1.318 2.882-2.909A2.884 2.884 0 0 0 2.882 0z"
                            data-original="#0077b5"
                          />
                        </svg>
                      </button>
                    </div>
                  </div>
                </div>
              </>
            ))}
          </div>
        </div>
      </body>
    </>
  );
};
