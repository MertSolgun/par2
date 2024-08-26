import React from "react";
import "./assets/css/main.css";
import "./assets/vendor/bootstrap/css/bootstrap.min.css";
import "./assets/vendor/bootstrap-icons/bootstrap-icons.css";
import "./assets/vendor/glightbox/css/glightbox.min.css";
import "./assets/vendor/swiper/swiper-bundle.min.css";
import AnkaraJpeg from "./assets/img/ankaranak2.jpeg";
import { Helmet } from "react-helmet";

const Main = () => {
  return (
    <div>
      <Helmet>
        <title>Ankara Evden Eve Nakliyat - Güvenli ve Hızlı Taşımacılık</title>
        <meta
          name="description"
          content="Ankara'da evden eve nakliyat hizmetleri sunuyoruz. Güvenli, hızlı ve sorunsuz taşınma deneyimi için bizimle iletişime geçin."
        />
      </Helmet>
      <>
        <header
          id="header"
          className="header d-flex align-items-center fixed-top"
        >
          <div className="container-fluid container-xl position-relative d-flex align-items-center justify-content-between">
            <a href="/" className="logo d-flex align-items-center">
              <h1 className="sitename">Ankara Evden Eve Nakliyat</h1>
            </a>
            <nav id="navmenu" className="navmenu">
              <ul>
                <li>
                  <a href="#hero" className="active">
                    Anasayfa
                  </a>
                </li>
                <li>
                  <a href="#about">Hakkımızda</a>
                </li>
                <li>
                  <a href="#gallery">Galeri</a>
                </li>
              </ul>
              <i className="mobile-nav-toggle d-xl-none bi bi-list" />
            </nav>
          </div>
        </header>
        <main className="main">
          {/* Hero Section */}
          <section id="hero" className="hero section dark-background">
            <img src="/assets/img/hero-bg-2.jpg" alt="" className="hero-bg" />
            <div className="container">
              <div className="row gy-4 justify-content-between">
                <div
                  className="col-lg-4 order-lg-last hero-img"
                  data-aos="zoom-out"
                  data-aos-delay={100}
                >
                  <img
                    src={AnkaraJpeg}
                    className="img-fluid  animated"
                    alt=""
                  />
                </div>
                <div
                  className="col-lg-6  d-flex flex-column justify-content-center"
                  data-aos="fade-in"
                >
                  <h1>Ankara evden eve nakliyat</h1>
                  <p>Ankara'da Güvenli Taşınmanın Adresi</p>
                </div>
              </div>
            </div>
            <svg
              className="hero-waves"
              xmlns="http://www.w3.org/2000/svg"
              xmlnsXlink="http://www.w3.org/1999/xlink"
              viewBox="0 24 150 28 "
              preserveAspectRatio="none"
            >
              <defs>
                <path
                  id="wave-path"
                  d="M-160 44c30 0 58-18 88-18s 58 18 88 18 58-18 88-18 58 18 88 18 v44h-352z"
                />
              </defs>
              <g className="wave1">
                <use xlinkHref="#wave-path" x={50} y={3} />
              </g>
              <g className="wave2">
                <use xlinkHref="#wave-path" x={50} y={0} />
              </g>
              <g className="wave3">
                <use xlinkHref="#wave-path" x={50} y={9} />
              </g>
            </svg>
          </section>
          {/* /Hero Section */}
          {/* About Section */}
          <section id="about" className="about section">
            <div className="container" data-aos="fade-up" data-aos-delay={100}>
              <div className="row align-items-xl-center gy-5">
                <div className="col-md-12">
                  <h1>Ankara Evden Eve Nakliyat Rehberi</h1>

                  <h2>Ankara'da Evden Eve Nakliyat Hizmetlerinin Önemi</h2>

                  <h3>Nakliyat Sürecinde Dikkat Edilmesi Gerekenler</h3>
                  <p>
                    <strong>Evden eve nakliyat</strong> süreci, eşyaların
                    güvenli ve hızlı bir şekilde taşınmasını sağlamak için
                    dikkat edilmesi gereken birçok detay içerir.{" "}
                    <strong>
                      <a href="https://arenanakliyat.com/">
                        Ankara evden eve nakliyat
                      </a>
                    </strong>{" "}
                    hizmeti alırken, öncelikle nakliyat firmasının
                    güvenilirliğine ve deneyimine dikkat edilmelidir. Taşınma
                    sürecinde eşyaların zarar görmemesi için uygun paketleme
                    malzemeleri kullanılmalı ve eşyalar dikkatlice
                    yerleştirilmelidir. Ayrıca, taşıma sırasında herhangi bir
                    aksaklık yaşanmaması için detaylı bir planlama yapılmalıdır.
                  </p>
                </div>
                <div className="col-md-12">
                  <h3>Ankara'da Profesyonel Nakliyat Şirketleri</h3>
                  <p>
                    Ankara, Türkiye’nin en büyük şehirlerinden biri olarak
                    birçok profesyonel nakliyat firmasına ev sahipliği
                    yapmaktadır. Bu firmalar, **Ankara evden eve nakliyat**
                    hizmeti sunarken müşteri memnuniyetini ön planda tutar.
                    Profesyonel nakliyat şirketleri, taşınma sürecinin her
                    aşamasında size yardımcı olabilir; eşyalarınızın
                    paketlenmesi, taşınması ve yeni evinize yerleştirilmesi
                    dahil. Güvenilir bir nakliyat firması seçmek, taşınma
                    sürecinin stressiz geçmesi açısından büyük önem taşır.
                  </p>
                </div>
                <div className="col-md-12">
                  <h2>Evden Eve Nakliyat Süreci Nasıl İşler?</h2>

                  <h3>Hazırlık Aşaması</h3>
                  <p>
                    <strong>
                      <a href="https://arenanakliyat.com/">
                        Ankara evden eve nakliyat
                      </a>
                    </strong>{" "}
                    süreci, hazırlık aşamasıyla başlar. Bu aşamada, taşınacak
                    eşyaların envanteri çıkarılır ve paketleme için gerekli
                    malzemeler temin edilir. Eşyaların cinsine ve hassasiyetine
                    göre farklı paketleme yöntemleri uygulanır. Örneğin,
                    kırılacak eşyalar için balonlu naylon veya strafor
                    kullanılırken, mobilyalar için battaniye ve özel koruyucular
                    tercih edilir. Ayrıca, taşınma günü için nakliyat firmasıyla
                    detaylı bir planlama yapılır ve saatler belirlenir.
                  </p>
                </div>
                <div className="col-md-12">
                  <h3>Eşyaların Paketlenmesi ve Taşınması</h3>
                  <p>
                    Hazırlık aşamasının ardından, eşyaların paketlenmesi ve
                    taşınması gelir.{" "}
                    <strong>
                      <a href="https://arenanakliyat.com/">
                        Ankara evden eve nakliyat
                      </a>
                    </strong>
                    firmaları, bu süreçte profesyonel ekipler ile çalışarak
                    eşyalarınızın güvenli bir şekilde taşınmasını sağlar.
                    Paketlenen eşyalar, dikkatlice taşıma araçlarına
                    yerleştirilir ve yeni adrese götürülür. Taşıma sırasında
                    eşyaların zarar görmemesi için araçların iç dizaynı da büyük
                    önem taşır. Eşyalar varış noktasına ulaştığında, aynı
                    titizlikle yeni eve yerleştirilir.
                  </p>
                </div>
                <div className="col-md-12">
                  <h2>Ankara'da Güvenilir Nakliyat Şirketi Nasıl Seçilir?</h2>

                  <h3>Referanslar ve Müşteri Yorumları</h3>
                  <p>
                    <strong>
                      <a href="https://arenanakliyat.com/">
                        Ankara evden eve nakliyat
                      </a>
                    </strong>{" "}
                    hizmeti alırken güvenilir bir firma seçmek, taşınma
                    sürecinin sorunsuz geçmesi açısından kritik önem taşır. Bu
                    nedenle, seçeceğiniz nakliyat firması hakkında referansları
                    ve müşteri yorumlarını incelemek, doğru karar vermenizde
                    size yardımcı olacaktır. Müşteri memnuniyeti yüksek olan
                    firmalar, genellikle profesyonel ve güvenilir hizmet sunar.
                    Ayrıca, firmanın geçmiş projelerini ve deneyimlerini
                    araştırmak da önemli bir adımdır.
                  </p>
                </div>
              </div>
            </div>
          </section>
          {/* Gallery Section */}
          <section id="gallery" className="gallery section">
            {/* Section Title */}
            <div className="container section-title" data-aos="fade-up">
              <div>
                <span className="description-title">Galeri</span>
              </div>
            </div>
            {/* End Section Title */}
            <div className="container" data-aos="fade-up" data-aos-delay={100}>
              <div className="row g-0">
                <div className="col-lg-3 col-md-4">
                  <div className="gallery-item">
                    <a
                      href="/ankara-evden-eve-nakliyat-1"
                      className="glightbox"
                      data-gallery="images-gallery"
                    >
                      <img
                        src="https://arenanakliyat.com/img/blog/1uimcj2g.webp"
                        alt=""
                      />
                      ankara evden eve nakliyat
                    </a>
                  </div>
                </div>
                {/* End Gallery Item */}
                <div className="col-lg-3 col-md-4">
                  <div className="gallery-item">
                    <a
                      href="/evden-eve-nakliyat-ankara-1"
                      className="glightbox"
                      data-gallery="images-gallery"
                    >
                      <img
                        src="https://arenanakliyat.com/img/blog/4w54f5de.webp"
                        alt=""
                      />
                      evden eve nakliyat ankara
                    </a>
                  </div>
                </div>
                {/* End Gallery Item */}
                <div className="col-lg-3 col-md-4">
                  <div className="gallery-item">
                    <a
                      href="/evden-eve-nakliyat-ankara-2"
                      className="glightbox"
                      data-gallery="images-gallery"
                    >
                      <img
                        src="https://arenanakliyat.com/img/blog/afx5ttpz.webp"
                        alt=""
                        className="img-fluid"
                      />
                      nakliyat ankara
                    </a>
                  </div>
                </div>
                {/* End Gallery Item */}
                <div className="col-lg-3 col-md-4">
                  <div className="gallery-item">
                    <a
                      href="/evden-eve-nakliyat-ankara-3"
                      className="glightbox"
                      data-gallery="images-gallery"
                    >
                      <img
                        src="https://arenanakliyat.com/img/blog/cvblrvuk.webp"
                        alt=""
                        className="img-fluid"
                      />
                      kahramankazan nakliyat
                    </a>
                  </div>
                </div>
                {/* End Gallery Item */}
                <div className="col-lg-3 col-md-4">
                  <div className="gallery-item">
                    <a
                      href="/evden-eve-nakliyat-ankara-4"
                      className="glightbox"
                      data-gallery="images-gallery"
                    >
                      <img
                        src="https://arenanakliyat.com/img/service/nds3b3x2.webp"
                        alt=""
                        className="img-fluid"
                      />
                      evden eve nakliyat
                    </a>
                  </div>
                </div>
                {/* End Gallery Item */}
                <div className="col-lg-3 col-md-4">
                  <div className="gallery-item">
                    <a
                      href="/evden-eve-nakliyat-ankara-5"
                      className="glightbox"
                      data-gallery="images-gallery"
                    >
                      <img
                        src="https://arenanakliyat.com/assets/images/service/hizmet.webp"
                        alt=""
                        className="img-fluid"
                      />
                      kumluca evden eve nakliyat
                    </a>
                  </div>
                </div>
                {/* End Gallery Item */}
                <div className="col-lg-3 col-md-4">
                  <div className="gallery-item">
                    <a
                      href="/evden-eve-nakliyat-ankara-6"
                      className="glightbox"
                      data-gallery="images-gallery"
                    >
                      <img
                        src="https://arenanakliyat.com/img/blog/koieem2a.webp"
                        alt=""
                        className="img-fluid"
                      />
                      yenimahalle nakliyat
                    </a>
                  </div>
                </div>
                {/* End Gallery Item */}
                <div className="col-lg-3 col-md-4">
                  <div className="gallery-item">
                    <a
                      href="/evden-eve-nakliyat-ankara-7"
                      className="glightbox"
                      data-gallery="images-gallery"
                    >
                      <img
                        src="https://arenanakliyat.com/assets/images/service/hizmet.webp"
                        alt=""
                        className="img-fluid"
                      />
                      korkuteli evden eve nakliyat
                    </a>
                  </div>
                </div>
                {/* End Gallery Item */}
              </div>
            </div>
          </section>
          {/* /Gallery Section */}

          <section className="content">
            <div className="container">
              <div className="row">
                <div className="col-md-12">
                  <h3>
                    Ankara'nın Ritmini Yakalamak: Yeni Bir Şehre Adım Atarken
                  </h3>
                  <p>
                    Ankara, Türkiye’nin başkenti olmanın yanı sıra, her
                    köşesinde farklı hikayeler barındıran bir şehirdir. Burada
                    yaşamak, yeni bir maceraya atılmak anlamına gelir. Şehrin
                    ritmini yakalamak, özellikle taşınma sürecinde bir hayli
                    önemlidir. Yeni bir ev, yeni bir mahalle demektir ve bu da
                    kendinizi bu yeni ortamda nasıl hissedeceğinizin
                    belirleyicisidir. Mahallelerin kendine has kültürleri,
                    insanların yaşam tarzları ve sosyal ilişkiler, Ankara’da
                    taşınırken dikkat etmeniz gereken unsurlar arasında yer
                    alır. Özellikle Çankaya’nın tarihi dokusu, Kızılay’ın
                    canlılığı ya da Eryaman’ın sakin atmosferi, hangi bölgeye
                    taşındığınıza bağlı olarak yaşayacağınız deneyimi tamamen
                    değiştirebilir.
                  </p>
                </div>
                <div className="col-md-12">
                  <h3>Ankara’nın Her Mahallesinin Farklı Hikayesi</h3>
                  <p>
                    Ankara’da hangi mahalleye taşınırsanız taşının, her yerin
                    kendine has bir hikayesi vardır. Örneğin, Çankaya,
                    diplomatların ve bürokratların yaşadığı elit bir bölge
                    olarak bilinirken, Kızılay, şehrin kalbinin attığı,
                    gençlerin ve öğrencilerin yoğunlukta olduğu bir yerdir.
                    Yenimahalle ve Batıkent gibi semtler ise daha çok ailelerin
                    tercih ettiği, sakin ve yeşil alanların bol olduğu bölgeler
                    olarak öne çıkar. Taşınacağınız mahalleyi önceden keşfetmek,
                    hem taşınma sürecinizi hem de sonrasını daha keyifli hale
                    getirecektir.
                  </p>
                </div>
                <div className="col-md-12">
                  <h3>
                    Yeni Bir Ev, Yeni Bir Başlangıç: Taşınmanın Psikolojisi
                  </h3>
                  <p>
                    Taşınmak, fiziksel bir eylem olmasının ötesinde, aynı
                    zamanda büyük bir duygusal değişimdir. Yeni bir ev, yeni bir
                    başlangıç anlamına gelir ve bu süreçte duygusal olarak
                    hazırlıklı olmak önemlidir. Ankara’da taşınırken, bu şehirde
                    sizi nelerin beklediğini keşfetmek, bu duygusal süreci
                    yönetmenize yardımcı olabilir. Yeni çevreniz, iş yeriniz,
                    sosyal hayatınız ve hatta günlük rutinleriniz değişecek. Bu
                    değişiklikler, başlangıçta sizi zorlasa da zamanla yeni
                    evinize ve hayatınıza alışmanızı sağlar.
                  </p>
                </div>
                <div className="col-md-12">
                  <h3>Şehirle Bütünleşmek: Yeni Komşular ve Sosyal Çevre</h3>
                  <p>
                    Ankara’ya taşındığınızda, sadece yeni bir eve değil, aynı
                    zamanda yeni bir sosyal çevreye de adım atıyorsunuz.
                    Komşularınızla tanışmak, mahallenizdeki sosyal etkinliklere
                    katılmak, şehri daha yakından tanımanızı sağlar. Özellikle
                    Ankara gibi büyük bir şehirde, komşularla iyi ilişkiler
                    kurmak, günlük yaşamınızı kolaylaştırır. Komşularınızdan
                    alacağınız küçük ipuçları, alışveriş yapacağınız yerler,
                    trafikte dikkat etmeniz gereken noktalar gibi pratik
                    bilgiler, Ankara’da hayatınızı daha sorunsuz geçirmenize
                    yardımcı olur.
                  </p>
                </div>
                <div className="col-md-12">
                  <h3>
                    Eşyaların Özenle Paketlenmesi: Dikkat Edilmesi Gerekenler
                  </h3>
                  <p>
                    Taşınma sürecinde en büyük kaygılardan biri, eşyaların zarar
                    görmeden yeni eve ulaştırılmasıdır. Bu noktada, eşyaların
                    doğru şekilde paketlenmesi büyük önem taşır. Kırılacak
                    eşyalar için özel ambalaj malzemeleri kullanmak, mobilyaları
                    ise dikkatlice sarmak gerekir. Ankara’daki profesyonel
                    nakliyat firmaları, bu konuda deneyimli oldukları için
                    eşyalarınızın güvenliğini en üst düzeyde sağlar. Taşınma
                    öncesinde eşyalarınızı kategorilere ayırarak, paketleme
                    işlemini daha sistematik hale getirebilirsiniz.
                  </p>
                </div>
              </div>
            </div>
          </section>
        </main>
        <footer id="footer" className="footer dark-background">
          <div className="container footer-top">
            <div className="row gy-4">
              <div className="col-lg-4 col-md-6 footer-about">
                <a href="/" className="logo d-flex align-items-center">
                  <span className="sitename">Ankara Evden Eve Nakliyat</span>
                </a>
                <div className="social-links d-flex mt-4">
                  <a href="">
                    <i className="bi bi-twitter-x" />
                  </a>
                  <a href="">
                    <i className="bi bi-facebook" />
                  </a>
                  <a href="">
                    <i className="bi bi-instagram" />
                  </a>
                  <a href="">
                    <i className="bi bi-linkedin" />
                  </a>
                </div>
              </div>
              <div className="col-lg-2 col-md-3 footer-links">
                <h4>Useful Links</h4>
                <ul>
                  <li>
                    <a href="https://arenanakliyat.com/">
                      ankara evden eve nakliyat
                    </a>
                  </li>
                  <li>
                    <a href="https://arenanakliyat.com/">evden eve nakliyat</a>
                  </li>
                  <li>
                    <a href="https://arenanakliyat.com/">nakliyat ankara</a>
                  </li>
                  <li>
                    <a href="/https://arenanakliyat.com/">
                      kahramankazan nakliyat
                    </a>
                  </li>
                  <li>
                    <a href="https://arenanakliyat.com/">evden eve nakliyat</a>
                  </li>
                </ul>
              </div>
            </div>
          </div>
          <div className="container copyright text-center mt-4">
            <p>
              © <span>Copyright</span>{" "}
              <strong className="px-1 sitename">
                Ankara evden eve nakliyat
              </strong>{" "}
              <span>All Rights Reserved</span>
            </p>
          </div>
        </footer>
      </>
    </div>
  );
};

export default Main;
