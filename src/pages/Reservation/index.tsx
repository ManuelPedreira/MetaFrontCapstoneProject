import { useState } from "react";
import NavBar from "../../components/NavBar";
import { ScrollRestoration } from "react-router-dom";
import {
  BackButtonWrapper,
  HeaderImage,
  ReservationWrapper,
  SectionTittle,
  StyledButton,
  StyledFooter,
  StyledSection,
} from "./Reservation.styled";
import ReservationScreen1 from "./ReservationScreen1";
import ReservationScreen2 from "./ReservationScreen2";
import headerImage1 from "/images/restauranfood.jpg";
import headerImage2 from "/images/fish.jpg";
import BackButton from "../../ui/BackButton";
import useIsPhone from "../../components/hooks/useIsPhone";
import { SubmitHandler, useForm } from "react-hook-form";

export type ReservationPageOptions = "first" | "last";

export type FormData = {
  date: Date;
  guest: number;
  hour: string;
  zone: string;
  name: string;
  surname: string;
  phone: string;
};

const getActualDate = () => {
  const now = new Date();
  now.setHours(0, 0, 0, 0);
  return now;
};

const ReservationPage = () => {
  const [reservationPage, setReservationPage] = useState<ReservationPageOptions>("first");
  const { isPhone } = useIsPhone();

  const {
    register,
    handleSubmit,
    getValues,
    formState: { errors, defaultValues },
  } = useForm<FormData>({
    defaultValues: {
      date: getActualDate(),
      guest: 0,
      hour: "",
      zone: "Indoor",
      name: "",
      surname: "",
      phone: "",
    },
  });

  const onSubmit: SubmitHandler<FormData> = (data) => {
    console.log(data);
  };

  if (reservationPage === "last" && isPhone && (errors.hour || errors.guest)) {
    setReservationPage("first");
  }

  return (
    <>
      <ScrollRestoration />
      <NavBar />
      <ReservationWrapper>
        {reservationPage === "last" && isPhone ? (
          <BackButtonWrapper>
            <BackButton onClick={() => setReservationPage("first")} />
          </BackButtonWrapper>
        ) : null}
        <HeaderImage src={reservationPage === "first" || !isPhone ? headerImage1 : headerImage2} />

        <form onSubmit={handleSubmit(onSubmit)}>
          <StyledSection reservationPage={reservationPage}>
            <SectionTittle>
              {reservationPage === "first" ? "Reserve a table" : "Details"}
            </SectionTittle>
            <ReservationScreen1
              enabledScreen={reservationPage === "first"}
              isPhone={isPhone}
              register={register}
              errors={errors}
              calendarDefaultValue={defaultValues?.date}
            />

            <ReservationScreen2
              enabledScreen={reservationPage === "last"}
              isPhone={isPhone}
              register={register}
              errors={errors}
              getValues={getValues}
            />
            {isPhone && reservationPage === "first" ? (
              <StyledButton
                onClick={(e) => {
                  e.stopPropagation();
                  e.preventDefault();
                  setReservationPage("last");
                }}
                value="Continue"
              />
            ) : (
              <StyledButton value="Send Reservation" type="submit" />
            )}
          </StyledSection>
        </form>
      </ReservationWrapper>
      <StyledFooter />
    </>
  );
};

export default ReservationPage;
