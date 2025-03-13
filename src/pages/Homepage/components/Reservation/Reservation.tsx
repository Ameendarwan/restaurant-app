import ReservationForm from './components/ReservationForm';
import reservationImage from '@app/assets/reservation/reservation.png';

const Reservation = () => {
  return (
    <section className="flex h-full w-full flex-col flex-wrap items-stretch max-sm:pb-24 lg:flex-row" id="reservation">
      <img src={reservationImage} alt="Reservation" className="object-cover lg:w-1/2" />
      {/* Reservation Form */}
      <ReservationForm />
    </section>
  );
};

export default Reservation;
