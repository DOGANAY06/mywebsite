import Image from "next/image";

export default function Home() {
  return (
    <div className="flex bg-gray-500">
      <div className="w-2/5 top-0 box-border p-5 h-screen">
        <div className="pt-16 pb-16">
          <img
            className="w-1/3 rounded-full h-50 object-cover mb-10"
            src="/dogan.jpeg"
            alt=""
          />
          <div className="font-semibold text-3xl mb-10">Doğan AY</div>
          <div className="flex font-medium">
            Teknolojiye olan tutkum, lisede okumaya başladığımda filizlendi. Bu
            tutkum beni bilgisayar mühendisliği okumaya teşvik etti ve bölümümü
            2.likle tamamladım. Eğitimimi alırken edindiğim bilgi ve becerileri
            kullanarak, kurumsal firmalara web uygulamaları geliştirme konusunda
            full-stack rolünde hizmet veriyorum. Benim için sadece kod yazmak
            önemli değil, aynı zamanda insanlarla etkileşim kurmak ve onların
            ihtiyaçlarını anlamak önemlidir. Müşterilerimle yakın ilişkiler
            kurmaya ve onların hedeflerine ulaşmalarına yardımcı olmaya özen
            gösteriyorum.
          </div>
        </div>
        <div className="flex">
          <a href="mailto:doganay58068@gmail.com" target="_blank">
            <div className="w-auto h-auto bg-amber-200 flex items-center pt-1 pb-1 pl-2 pr-2 rounded-md mr-5">
              <img
                className="w-5"
                src="https://upload.wikimedia.org/wikipedia/commons/thumb/7/7e/Gmail_icon_%282020%29.svg/2560px-Gmail_icon_%282020%29.svg.png"
                alt="Gmail"
              />
              <div className="pl-3 text-sm text-black">Gmail</div>
            </div>
          </a>

          <a href="./DoganAY_cv.pdf" download>
            <div className="w-auto h-auto bg-red-200 flex items-center pt-1 pb-1 pl-2 pr-2 rounded-md">
              <img
                className="w-5"
                src="https://seeklogo.com/images/A/acrobat-file-pdf-logo-37A1BFDE35-seeklogo.com.png"
                alt="PDF"
              />
              <div className="pl-3 text-sm text-black">Özgeçmiş CV</div>
            </div>
          </a>
        </div>
        <div>
          <h2 className="text-xl font-semibold mb-3">Çalıştığım Alanlar</h2>
          <ul className="list-disc pl-5 text-gray-700">
            <li>Full Stack Web Geliştirme</li>
            <li>WordPress Web Geliştirme</li>
            <li>Teknik Destek</li>
            <li>Web Tasarımı</li>
          </ul>
        </div>
        <a className="p-5" href="https://wa.me/905071235726" target="_blank">
        <div className="w-auto h-auto bg-green-200 flex items-center pt-1 pb-1 pl-2 pr-2 rounded-md ml-5">
          <img
            className="w-10"
            src="https://upload.wikimedia.org/wikipedia/commons/6/6b/WhatsApp.svg"
            alt="WhatsApp"
          />
          <div className="pl-3 text-sm text-black">
          <span className="text-xl font-semibold mb-3 text-black">İş Teklifi ve Önerileriniz için iletişime geçebilirsiniz.</span>
          </div>
        </div>
      </a>
      </div>
      <div className="">
        <div className="container flex flex-wrap justify-between">
          <a target="_blank" href="https://www.instagram.com/_dogan_ay_06/">
            <div className="w-32 border-2 h-32 p-3 rounded-lg bg-rose-300 mr-10">
              <img
                className=" w-8 pb-3"
                src="https://upload.wikimedia.org/wikipedia/commons/thumb/a/a5/Instagram_icon.png/1200px-Instagram_icon.png"
                alt=""
              />
              <div className="text-xs text-white pb-3">@_dogan_ay_06</div>
              <div className="bg-rose-500 p-1 text-white text-xs rounded-lg w-fit font-medium">
                Takip Et
              </div>
            </div>
          </a>
          <a target="_blank" href="https://github.com/DOGANAY06">
            <div className="w-32 border-2 h-32 p-3 rounded-lg bg-white mr-10">
              <img
                className=" w-8 pb-3"
                src="https://github.githubassets.com/assets/GitHub-Mark-ea2971cee799.png"
                alt=""
              />
              <div className="text-xs text-black pb-3">doganay06</div>
              <div className="bg-black p-1 text-white text-xs rounded-lg w-fit font-medium">
                Takip Et
              </div>
            </div>
          </a>
          <a target="_blank" href="https://www.linkedin.com/in/do%C4%9Fanay/">
            <div className="w-32 border-2 h-32 p-3 rounded-lg bg-blue-600 mr-10">
              <img
                className=" w-8 pb-3"
                src="https://upload.wikimedia.org/wikipedia/commons/thumb/c/ca/LinkedIn_logo_initials.png/600px-LinkedIn_logo_initials.png"
                alt=""
              />
              <div className="text-xs text-white pb-3">@doğanay</div>
              <div className="bg-sky-500 p-1 text-white text-xs rounded-lg w-fit font-medium">
                Bağlantı Kur
              </div>
            </div>
          </a>
          <a target="_blank" href="https://medium.com/@dogan-ay">
            <div className="w-32 border-2 h-32 p-3 rounded-lg bg-white mr-10">
              <img
                className=" w-8 pb-3"
                src="https://cdn4.iconfinder.com/data/icons/social-media-circle-7/512/Medium_circle-512.png"
                alt=""
              />
              <div className="text-xs text-black pb-3">@dogan-ay</div>
              <div className="bg-black p-1 text-white text-xs rounded-lg w-fit font-medium">
                Follow
              </div>
            </div>
          </a>
          <div className="lg:flex lg:flex-wrap p-5">
            <a className="p-5" href="https://www.ifm.gov.tr/" target="_blank">
              <div className="w-96 h-auto bg-gray-600 rounded-xl p-3">
                <img
                  className="w-10 pb-2"
                  src="https://www.ifm.gov.tr/dist/media/img/logo-en_mobile.svg"
                  alt=""
                />
                <div className="pb-2 text-xs-bold font-medium text-white">
                  İstanbul Finans Merkezi Projesi
                </div>
                <div className="font-medium text-xs text-white pb-2">
                  Full Stack Developer olarak geliştirmeler yapmaktayım.
                </div>
                <img
                  className="rounded-xl"
                  src="https://www.ifm.gov.tr/dist/media/img/home/ifmvideo2023.png"
                  alt=""
                />
              </div>
            </a>
            <a
              className="p-5"
              href="https://ankaramamakspot.com/"
              target="_blank"
            >
              <div className="w-96 h-auto bg-gray-600 rounded-xl p-3">
                <img
                  className="w-10 pb-2"
                  src="https://ankaramamakikincielesya.com/wp-content/uploads/2023/02/logo-1-164x84.png"
                  alt=""
                />
                <div className="pb-2 text-xs font-medium text-white">
                  Furkan Spot Ankara Mamak İkinci El Eşya Alım & Satım
                </div>
                <div className="font-medium text-xs text-white pb-2">
                  Freelancer Olarak Geliştirdiğim Projem
                </div>
                <img
                  className="rounded-xl"
                  src="https://ankaramamakikincielesya.com/wp-content/uploads/2023/02/logo-1.png"
                  alt=""
                />
              </div>
            </a>
            <a
              className="p-5"
              href="https://play.google.com/store/books/details/Do%C4%9Fan_AY_C_Programlama_%C3%96rnekleri?id=q1rrDwAAQBAJ"
              target="_blank"
            >
              <div className="w-96 h-auto bg-gray-600 rounded-xl p-3">
                <img
                  className="w-10 pb-2"
                  src="https://books.google.com/books/publisher/content/images/frontcover/q1rrDwAAQBAJ?fife=w240-h345"
                  alt=""
                />
                <div className="pb-2 text-xs font-medium text-white">
                C Programlama & Örnekleri
                </div>
                <div className="font-medium text-xs text-white pb-2">
                  Bilgisayar Mühendisliği 1.sınıf Programlama dersi konularını içerir.
                </div>
                <img
                  className="rounded-xl"
                  src="https://books.google.com/books/publisher/content/images/frontcover/q1rrDwAAQBAJ?fife=w240-h345"
                  alt=""
                />
              </div>
            </a>
            <a
              className="p-5"
              href="https://play.google.com/store/books/details/Do%C4%9Fan_AY_Mant%C4%B1k_Devreleri?id=2BJEEAAAQBAJ"
              target="_blank"
            >
              <div className="w-96 h-auto bg-gray-600 rounded-xl p-3">
                <img
                  className="w-10 pb-2"
                  src="https://books.google.com/books/publisher/content/images/frontcover/2BJEEAAAQBAJ?fife=w240-h345"
                  alt=""
                />
                <div className="pb-2 text-xs font-medium text-white">
                  Mantık Devreleri: Sayısal Elektronik
                </div>
                <div className="font-medium text-xs text-white pb-2">
                Bilgisayar Mühendisliği 2.sınıf Mantık Devreleri dersi konularını içerir.
                </div>
                <img
                  className="rounded-xl"
                  src="https://books.google.com/books/publisher/content/images/frontcover/2BJEEAAAQBAJ?fife=w240-h345"
                  alt=""
                />
              </div>
            </a>
            <a
              className="p-5"
              href="https://ankaramamakspot.com/"
              target="_blank"
            >
              <div className="w-96 h-auto bg-gray-600 rounded-xl p-3">
                <img
                  className="w-10 pb-2"
                  src="https://ankaramamakspot.com/wp-content/uploads/2022/03/cropped-aaQV8rg.png"
                  alt=""
                />
                <div className="pb-2 text-xs font-medium text-white">
                  Ankara Mamak Spot
                </div>
                <div className="font-medium text-xs text-white pb-2">
                  Freelancer Olarak Geliştirdiğim Projem
                </div>
                <img
                  className="rounded-xl"
                  src="https://ankaramamakspot.com/wp-content/gallery/girissayfasigalery/3742dcff-ef18-4721-ae53-4248be2f4889.jpg"
                  alt=""
                />
              </div>
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}
