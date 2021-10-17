import React from 'react';

class Header extends React.Component {
    render() { 
        return( <div>

        <nav id="title-bar">
            <div className="container-fluid">
                <h1>Usuarios</h1>
            </div>
        </nav>

        {/* <section>
           
          <div id="toolbar" class="toolbr-orange">
            <div class="container-fluid">
                   
              <div class="row" >
                <div class="col-md-2">
                  <p class="info-cant">
                    <span class="info-cant-number">0</span> Elementos <br />
                    <span class="info-tx">en esta sección</span>
                  </p>
                </div>


                <div class="col-md-7" id="tool_items">
                  <a class="tool_item" href="#" role="button" type="button" data-bs-toggle="modal" data-bs-target="#mod_n_usuario">
                      <i class="fas fa-user"></i> <br/> <span>Nuevo Usuario</span> 
                  </a>
                </div>
              </div>

            </div>
          </div>
        </section> */}

        </div>
        )
    }
}
 
export default Header;