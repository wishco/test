import React from "react";
import {connect} from "react-redux";
import Pages from "./Pages";

const PagesContainer = ({routeText, ...props}) => {

  return (
    <>
      <Pages
        routeText = {routeText}
      />
      <p>Переходим по ссылке <b>/user/options</b>, нажимаем кнопки и смотрим в консоль...</p>
    </>
  )
}

const mapStateToProps = (state) => {
  return {
  }
};

export default connect(mapStateToProps, {})(PagesContainer);
