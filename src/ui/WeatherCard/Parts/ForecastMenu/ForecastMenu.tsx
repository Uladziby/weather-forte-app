import "./styles.css";

export const ForecastMenu = ({ isActive }: { isActive: boolean }) => {
  return (
    <div className={`forecast_menu ${isActive ? "open" : "close"}`}>
      <div className="forecast_menu-item">Today</div>
      <div className="forecast_menu-item">Tomorrow</div>
      <div className="forecast_menu-item">Week</div>
    </div>
  );
};
