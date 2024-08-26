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
      <>
        <Helmet>
          <title>Evden Eve Nakliyat Ankara - Hemen Teklif Al</title>
          <meta
            name="description"
            content="Evden Eve Nakliyat Ankara hizmetleri sunuyoruz. Güvenli, hızlı ve sorunsuz taşınma deneyimi için hemen teklif alin"
          />
        </Helmet>
        <header
          id="header"
          className="header d-flex align-items-center fixed-top"
        >
          <div className="container-fluid container-xl position-relative d-flex align-items-center justify-content-between">
            <a href="/" className="logo d-flex align-items-center">
              <h1 className="sitename">Evden Eve Nakliyat Ankara</h1>
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
                  <h1>Evden Eve Nakliyat Ankara</h1>
                  <p>Ankara'nın ileri gelen firması</p>
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
                  <h1>
                    Evden Eve Nakliyat Ankara: Sorunsuz ve Güvenli Taşınmanın
                    Adresi
                  </h1>

                  <h2>Evden Eve Nakliyat Nedir?</h2>
                  <h3>Evden Eve Nakliyatın Tanımı</h3>
                  <p>
                    <strong>
                      <a href="https://arenanakliyat.com/" rel="dofollow">
                        Evden eve nakliyat
                      </a>
                    </strong>
                    , ev eşyalarının bir yerden başka bir yere taşınmasını
                    kapsayan profesyonel bir hizmettir. Bu hizmet,
                    mobilyalarınızın, beyaz eşyalarınızın, kişisel eşyalarınızın
                    ve diğer taşınabilir varlıklarınızın güvenli bir şekilde
                    taşınmasını sağlar. Evden eve nakliyat, geleneksel nakliyat
                    yöntemlerinden farklı olarak, ambalajlama, taşıma, ve
                    yerleştirme gibi hizmetleri de içerebilir.
                  </p>
                </div>
                <div className="col-md-12">
                  <h3>Geleneksel Nakliyat Yöntemlerinden Farkları</h3>
                  <p>
                    Evden eve nakliyat, geleneksel taşımacılık yöntemlerinden
                    daha kapsamlıdır. Geleneksel yöntemlerde eşyalar sadece
                    taşınır; oysa{" "}
                    <strong>
                      <a href="https://arenanakliyat.com/" rel="dofollow">
                        Evden eve nakliyat
                      </a>
                    </strong>{" "}
                    hizmetlerinde ambalajlama, yükleme, boşaltma ve eşyaların
                    yerleştirilmesi gibi hizmetler de sunulur. Ayrıca, bu hizmet
                    sırasında eşyaların hasar görmemesi için özel koruma
                    önlemleri alınır ve sigorta seçenekleri sunulur.
                  </p>
                </div>
                <div className="col-md-12">
                  <h3>Ankara’nın Dinamik Nüfusu ve Nakliyat İhtiyaçları</h3>
                  <p>
                    Ankara, Türkiye'nin en kalabalık ikinci şehri olmasıyla
                    birlikte sürekli bir göç hareketine sahiptir. Hem şehir içi
                    hem de şehirlerarası taşınmalar sıklıkla yaşanır. Bu
                    hareketlilik, güvenilir evden eve nakliyat hizmetlerine olan
                    talebi artırır. Ankara’nın yoğun trafiği ve geniş yerleşim
                    alanları, profesyonel nakliyat hizmetlerini neredeyse
                    zorunlu kılar.
                  </p>
                </div>
                <div className="col-md-12">
                  <h3>Şehir İçi ve Şehirlerarası Nakliyatın Farkları</h3>
                  <p>
                    Şehir içi nakliyat, genellikle daha kısa mesafelerde
                    gerçekleşirken, şehirlerarası nakliyat daha kapsamlı bir
                    planlama ve hazırlık gerektirir. Şehirlerarası taşınmalar
                    sırasında eşyaların uzun mesafelerde güvenli bir şekilde
                    taşınması için özel önlemler alınır. Ankara’da bu iki tür
                    nakliyat da oldukça yaygındır ve her biri için özel
                    hizmetler sunan firmalar bulunmaktadır.
                  </p>
                </div>
                <div className="col-md-12">
                  <h3>Nakliyat Firması Seçiminde Dikkat Edilmesi Gerekenler</h3>
                  <p>
                    <strong>
                      <a href="https://arenanakliyat.com/" rel="dofollow">
                        Evden eve nakliyat
                      </a>
                    </strong>
                    firması seçerken, firmanın deneyimi, müşteri yorumları ve
                    referanslarına dikkat etmek önemlidir. Ayrıca, firmanın
                    lisanslı ve sigortalı olup olmadığını kontrol etmek de
                    güvenli bir taşınma süreci için kritik bir adımdır. Taşınma
                    öncesi bir keşif yapılması ve fiyat teklifi alınması,
                    sürpriz maliyetlerin önüne geçmek için önemlidir.
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
                      href="/ankara-evden-eve-nakliyat-10"
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
                      href="/ankara-evden-eve-nakliyat-15"
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
                      href="/evden-eve-nakliyat-ankara-33"
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
                      href="/evden-eve-nakliyat-ankara-44"
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
                      href="/yenimahallenakliyat"
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
                      href="/korkutelievdenevenakliyat"
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
                  <h3>Sigorta ve Güvenlik Önlemleri</h3>
                  <p>
                    Taşınma sürecinde eşyaların zarar görmesi ihtimaline karşı,
                    sigorta yaptırmak büyük önem taşır. Profesyonel nakliyat
                    firmaları genellikle bu tür sigorta hizmetlerini sunar ve
                    eşyalarınızın taşınma sırasında karşılaşabileceği risklere
                    karşı teminat sağlar. Ayrıca, eşyaların taşınması sırasında
                    alınan güvenlik önlemleri, hasar riskini minimuma indirir.
                  </p>
                </div>
                <div className="col-md-12">
                  <h3>Müşteri Yorumları ve Referanslar</h3>
                  <p>
                    Bir nakliyat firmasını seçerken, geçmiş müşterilerin
                    deneyimleri büyük önem taşır. Müşteri yorumları ve
                    referanslar, firmanın güvenilirliği ve hizmet kalitesi
                    hakkında bilgi verir. Olumlu geri bildirimler, firmanın
                    profesyonel yaklaşımını ve müşteri memnuniyetine verdiği
                    önemi gösterir.
                  </p>
                </div>
                <div className="col-md-12">
                  <h3>Eşyaların Paketlenmesi ve Ambalajlama</h3>
                  <p>
                    Paketleme ve ambalajlama, taşınma sürecinin en kritik
                    adımlarından biridir. Eşyaların zarar görmeden taşınabilmesi
                    için doğru ambalaj malzemelerinin kullanılması gerekir.
                    Kırılacak eşyalar için özel koruyucu malzemeler, mobilyalar
                    için ise dayanıklı ambalaj malzemeleri tercih edilmelidir.
                    Profesyonel nakliyat firmaları, bu süreçte uzman ekipleri
                    ile güvenli ambalajlama hizmeti sunar.
                  </p>
                </div>
                <div className="col-md-12">
                  <h3>Ankara’da Ortalama Nakliyat Fiyatları</h3>
                  <p>
                    Genel olarak,{" "}
                    <strong>
                      <a href="https://arenanakliyat.com/">
                        Ankara evden eve nakliyat
                      </a>
                    </strong>{" "}
                    fiyatları, taşınma sürecinin zorluk derecesine ve taşınacak
                    mesafeye göre değişiklik gösterir. Örneğin, aynı şehir
                    içinde yapılan taşınmalarda fiyatlar genellikle daha makul
                    iken, şehirlerarası taşınmalarda fiyatlar daha yüksek
                    olabilir. Ortalama olarak, şehir içi taşınmalarda 3.000 TL
                    ile 7.000 TL arasında değişen fiyatlar söz konusu olabilir.
                  </p>
                </div>
                <div className="col-md-12">
                  <h3>Fiyat Performans Karşılaştırması</h3>
                  <p>
                    Evden eve nakliyat hizmeti alırken, yalnızca en düşük fiyatı
                    sunan firmayı tercih etmek yerine, hizmet kalitesi ve
                    güvenilirlik gibi faktörleri de göz önünde bulundurmak
                    gerekir. Fiyat-performans karşılaştırması yaparak, en iyi
                    hizmeti en uygun fiyata sunan firmayı seçmek, taşınma
                    sürecinde yaşanabilecek olası sorunları minimize eder.
                  </p>
                </div>
                <div className="col-md-12">
                  <h3>Firmalar Arasında Karşılaştırma Yapmak</h3>
                  <p>
                    En iyi nakliyat firmasını seçmek için, birden fazla firma
                    arasında karşılaştırma yapmak gerekir. Fiyat tekliflerini,
                    hizmet kapsamını ve müşteri yorumlarını değerlendirerek,
                    ihtiyaçlarınıza en uygun firmayı seçebilirsiniz. Ayrıca,
                    firmaların sunduğu ek hizmetleri ve sigorta seçeneklerini de
                    göz önünde bulundurmak, kararınızı verirken yardımcı
                    olabilir.
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
                    <a href="/ankaraevdenevenakliyat">
                      ankara evden eve nakliyat
                    </a>
                  </li>
                  <li>
                    <a href="/evdenevenakliyat">evden eve nakliyat</a>
                  </li>
                  <li>
                    <a href="/nakliyatankara">nakliyat ankara</a>
                  </li>
                  <li>
                    <a href="/kahramankazannakliyat">kahramankazan nakliyat</a>
                  </li>
                  <li>
                    <a href="/evdenevenakliyat">evden eve nakliyat</a>
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
