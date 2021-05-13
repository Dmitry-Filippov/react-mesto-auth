import confirmSrc from '../images/registerConfirm.png';
import refuseSrc from '../images/registerRefused.png';

function InfoTooltip(props) {
  const confirm = 'Вы успешно зарегистрировались!';
  const refuse = 'Что-то пошло не так! Попробуйте ещё раз';
  return (
    <div className={`pop-up-container ${props.isInfoPopupOpen ? 'pop-up-container_opened' : ''}  pop-up-container_type_info`}>
      <div className="pop-up pop-up_type_info">
        <img className="pop-up_type_info__image" src={props.isRegisterConfirm ? confirmSrc : refuseSrc} />
        <p className="pop-up_type_info__text">{props.isRegisterConfirm ? confirm : refuse}</p>
        <button
          className="pop-up__close"
          type="button"
          onClick={props.closePopup}
        ></button>
      </div>
    </div>
  );
}

export default InfoTooltip