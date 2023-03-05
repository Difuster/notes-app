import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import './Alert.scss';
import { actions as alertActions, selectAlertState } from '../../slices/alertSlice';
import CloseButton from '../Buttons/CloseButton/CloseButton';

export default function Alert() {
  const { value, type, visibility } = useSelector(selectAlertState);
  const dispatch = useDispatch();

  const handleClick = (e) => {
    e.preventDefault();
    const alert = {
      value: "",
      type: "",
      visibility: "hidden",
    }
    dispatch(alertActions.setAlert(alert));
  }

  return (
    <div className="alert" style={{visibility: visibility}}>
      <div className="container">
        <div className="alert__body">
          <p className={`alert__${type}`}>
            {value}
          </p>
          <CloseButton
            handler={handleClick}
            value="&times;"
          />
        </div>
      </div>
    </div>
  )
}
