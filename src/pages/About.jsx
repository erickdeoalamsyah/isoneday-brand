import React from "react";
import about1 from "../assets/about/events1.png"
import about2 from "../assets/about/events2.png"
import Footer from "../components/FooterLayout";

const About = () => {
  return (
    <>
    <section className="text-white py-[6rem] ">
    <div className="fixed inset-0 -z-10">
          <div class="relative h-full w-full bg-black">
            <div class="absolute bottom-0 left-0 right-0 top-0 bg-[linear-gradient(to_right,#4f4f4f2e_1px,transparent_1px),linear-gradient(to_bottom,#8080800a_1px,transparent_1px)] bg-[size:14px_24px]"></div>
            <div class="absolute left-0 right-0 top-[-10%] h-[1000px] w-[1000px] rounded-full bg-[radial-gradient(circle_400px_at_50%_300px,#fbfbfb36,#000)]"></div>
          </div>
        </div>
      <div className="container mx-auto px-4 md:px-6 lg:px-40">
        <h1 className="text-2xl font-bold mb-8 border-b border-white py-2">About Us</h1>

        <div className="mb-10">
          <img
            src={about1}
            alt="Team Photo"
            className="w-full h-[18rem] lg:w-full lg:h-[40rem] rounded-lg shadow-md"
          />
        </div>

        <div className="mb-4">
          <h2 className="text-lg font-semibold mb-4 border-b border-white py-2">OUR STORY</h2>
          <p className="text-gray-300 text-sm leading-relaxed  ">
            Isoneday adalah nama yang gue pilih untuk menjadi semua hasil dari
            karya-karya isles gue, yang isinya pure realitas di media karena
            dari benih bedrock merch untuk menaikkan tren-trek pelajaran
            anjingnya bedrock-band Isoneday. <br />
            <br />
            Tradisi isoneday tidak hanya menjadi perbedaan melakukan transaksi
            atau mempertontonkan belanjaan signature arts and classic dari
            aksesorisan landricked isoneday.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 mb-12">
          <div>
            <h2 className="text-lg font-semibold mb-4 border-b border-white py-2">OUR VISION</h2>
            <p className="text-gray-300 text-sm leading-relaxed ">
              Menjadi brand clothing yang menginspirasi dan menghubungkan dunia
              seni dengan komunitas, menyampaikan pesan seni lewat kain dan
              fashion klasik yang bisa diterima oleh semua, dan dimiliki oleh
              siapa pun, di mana pun.
            </p>
          </div>
          <div>
            <h2 className="text-lg font-semibold mb-4 border-b border-white py-2">OUR MISSION</h2>
            <ul className="list-disc list-inside space-y-2 text-gray-300 text-sm leading-relaxed ">
              <li>Mempertahankan kualitas dan ekspresi karya seni dalam setiap produk.</li>
              <li>
                Menyampaikan kreativitas produk seni yang dapat diterima oleh
                semua kalangan.
              </li>
              <li>
                Menghadirkan seni dan kain fashion berkualitas tinggi di dalam
                lokal clothing untuk semua klien dan komunitas.
              </li>
            </ul>
          </div>
        </div>
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-10">
          <div>
            <img
              src={about2}
              alt="About2"
              className="w-full rounded-lg shadow-md"
            />
          </div>
          <div>
            <h2 className="text-lg font-semibold mb-4 border-b border-white py-2">THE COMPANY</h2>
            <p className="text-gray-300 leading-relaxed text-sm">
              Isoneday berdedikasi dengan karakteristik gambar yang keren, tidak
              akan dijual di dalam merchandise brand lainnya. Semua karakteristik
              di dalam produk ini adalah perasaan dan jiwa orang-orang team
              "isoneday" bersatu dalam aksi dalam jalan fashion klasik dan seni
              merchandise. Tidak semua hasil terjual fit for us, tetapi semua
              untuk membuat dunia seni lebih maju dan mendukung karya anak lokal
              merch 100% lokal karya landricked.
            </p>
          </div>
        </div>
      </div>
    </section>
    <div>
      <Footer/>
    </div>
    
    </>    
  );
};

export default About;
