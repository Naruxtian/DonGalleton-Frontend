import React from 'react'

const Inicio = () => {
  return (
    <div className='container'>
        <div className="">
    <div className="">
        <div id="carouselExampleAutoplaying" class="carousel carousel-dark slide" data-bs-ride="carousel">
            <div className="carousel-inner">
                <div className="carousel-item active">
                    <img src="/src/assets/c2.jpg" className="d-block w-100 imgCarrousel" alt="..."/>
                </div>
                <div class="carousel-item">
                    <img src="/src/assets/c1.jpg" className="d-block w-100 imgCarrousel" alt="..."/>
                </div>
                <div class="carousel-item">
                    <img src="/src/assets/c3.jpg" className="d-block w-100 imgCarrousel" alt="..."/>
                </div>
                <div class="carousel-item">
                    <img src="/src/assets/c4.jpg" className="d-block w-100 imgCarrousel" alt="..."/>
                </div>
            </div>
            <button className="carousel-control-prev" type="button" data-bs-target="#carouselExampleAutoplaying"
                data-bs-slide="prev">
                <span className="carousel-control-prev-icon" aria-hidden="true"></span>
                <span className="visually-hidden">Previous</span>
            </button>
            <button className="carousel-control-next" type="button" data-bs-target="#carouselExampleAutoplaying"
                data-bs-slide="next">
                <span className="carousel-control-next-icon" aria-hidden="true"></span>
                <span className="visually-hidden">Next</span>
            </button>
        </div>
    </div>
    </div>
      <div >
        <h1>Historia</h1>
        <hr/>
        <div className="card mb-3" >
            <div className="card-body">
                <div className="container text-center">
                    <div className="row align-items-center">
                        <div className="col-6">
                            <p className="card-text" >"Don Galleto" es una
                                tienda de galletas que se especializa en la elaboración y venta de galletas frescas. Su historia se remonta a hace más de 30 años, cuando el
                                fundador, un apasionado de la reposteria, decidió abrir su propio negocio en el corazón de la ciudad. Desde entonces, "Don Galleto" ha sido reconocido por su calidad y frescura, y ha construido una sólida reputación en la comunidad.</p>
                        </div>
                        <div className="col-6">
                            <img src="/src/assets/1.jpg" className='imgInfo' alt="" />
                        </div>
                    </div>
                </div>
            </div>
        </div>
      </div>
      <br/>
      <div >
        <h1>Nuestros productos</h1>
        <hr/>
        <div class="card mb-3" >
            <div class="card-body">
                <div class="container text-center">
                    <div class="row align-items-center">
                        <div class="col-6">
                            <img src="/src/assets/2.jpg" className='imgInfo' alt="" />
                        </div>
                        <div class="col-6">
                            <p class="card-text">Entre los productos más populares de "Don Galleto" se encuentran una gran variedad de galletas, como galletas de chocolate, de naranja y de jengibre, entre muchas otras. </p>                   
                        </div>                
                    </div>
                </div>
            </div>
        </div>
    </div>
    <br/>
    <div class="container text-center">
        <div class="row align-items-center">
            <div class="col" >
                <div class="zoom">
                    <h1>Mision</h1>
                    <hr/>
                    <div class="card mb-3">
                        <div class="card-body">
                            
                            <div class="col">
                                <img src="../static/img/2.jpg" alt=""/>
                            </div>
                            <br/>
                            <div class="col">
                                <p class="card-text">La misión de "Don Galleto" es ofrecer productos de galleteria frescos y de alta calidad a sus clientes, utilizando ingredientes naturales y técnicas tradicionales de reposteria.
                                </p>
                            </div>

                        </div>
                    </div>
                </div>
            </div>

            <div class="col">
                <div class="zoom">
                  <h1>Vision</h1>
                  <hr/>
                  <div class="card mb-3">
                    <div class="card-body">
                      <div class="col">
                        <img src="../static/img/3.jpg" alt=""/>
                      </div>
                      
                      <div class="col">
                        <p class="card-text">La visión de la galleteria es convertirse en la mejor de la ciudad, y ser reconocida por su excelencia en productos y servicio.</p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            
            <div class="col">
                <div class="zoom">
                    <h1>Valores</h1>
                    <hr/>
                    <div class="card mb-3">
                        <div class="card-body">
                            
                            <div class="col">
                                <img src="../static/img/4.jpg" alt="" />
                            </div>
                            <div class="col">
                                <p class="card-text">Los valores de "Don Galleto" son la honestidad, la calidad, la tradición, el compromiso con el medio ambiente y la satisfacción del cliente. La galleteria se enorgullece de utilizar ingredientes locales y de apoyar a los agricultores y proveedores de la región.
                                </p>
                            </div>

                        </div>
                    </div>
                </div>
            </div>

        </div>
    </div>
      
    </div>
  )
}

export default Inicio