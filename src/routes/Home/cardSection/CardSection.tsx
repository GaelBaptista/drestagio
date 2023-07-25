import './cardSection.css'

export function CardSection () {
  return (
   
<div className="feat bg-gray pt-5 pb-5">
    <div className="containerCard">
      <div className="row">
        <div className="section-head col-sm-12">
          <h4><span>Why Choose</span> Me?</h4>
          <p>Lorem Ipsum is simply dummy text of the printing and type setting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown book.</p>
        </div>
        <div className='cardrow'>

        
        <div >
          <div className="item"> <span className="icon feature_box_col_one"><i className="fa fa-globe"></i></span>
            <h6>Modern Design</h6>
            <p>Treinar novos Talentos</p>
            <p>Treinar novos Talentos</p>
            <p>Treinar novos Talentos</p>


          </div>
        </div>
        <div className="col-lg-4 col-sm-6">
          <div className="item"> <span className="icon feature_box_col_two"><i className="fa fa-anchor"></i></span>
            <h6>Creative Design</h6>
            <p>Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula eget dolor Aenean massa.</p>
          </div>
        </div>
        <div className="col-lg-4 col-sm-6">
          <div className="item"> <span className="icon feature_box_col_three"><i className="fa fa-hourglass-half"></i></span>
            <h6>Your Photoshoping</h6>
            <p>Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula eget dolor Aenean massa.</p>
          </div>
        </div>
        </div>
      </div>
    </div>
  </div>

   

  )

}