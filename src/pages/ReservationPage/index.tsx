import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import {
  BackButtonWrapper,
  HeaderImage,
  RegistrationForm,
  ReservationWrapper,
  SectionTittle,
  StyledButton,
  StyledSection,
} from "./Reservation.styled";
import ReservationScreen1 from "./components/ReservationScreen1";
import ReservationScreen2 from "./components/ReservationScreen2";
import BackButton from "../../ui/BackButton";
import usePhoneResponsive from "../../hooks/usePhoneResponsive";
import { SubmitHandler, useForm } from "react-hook-form";
import { FormType } from "../../types/FormType";
import { getHours, sendReservation } from "../../API/postCalls";

export type ReservationPageOptions = "first" | "last";

const getActualDate = () => {
  const now = new Date();
  now.setHours(0, 0, 0, 0);
  return now;
};

const ReservationPage = () => {
  const [reservationPage, setReservationPage] = useState<ReservationPageOptions>("first");
  const { isPhone } = usePhoneResponsive();
  const [validHours, setValidHours] = useState<string[]>([]);
  const [isLoading, setIsLoading] = useState(false);
  const naviage = useNavigate();

  const {
    register,
    handleSubmit,
    getValues,
    watch,
    formState: { errors, defaultValues },
  } = useForm<FormType>({
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

  const onSubmit: SubmitHandler<FormType> = (data) => {
    setIsLoading(true);

    sendReservation(data)
      .then(() => {
        naviage("confirm", { state: { reservation: data } });
      })
      .catch()
      .finally(() => {
        setIsLoading(false);
      });
  };

  if (reservationPage === "last" && isPhone && (errors.hour || errors.guest)) {
    setReservationPage("first");
  }

  useEffect(() => {
    getHours(getValues("date")).then((hourList) => setValidHours(hourList));
  }, [watch("date")]);

  return (
    <ReservationWrapper>
      {reservationPage === "last" && isPhone ? (
        <BackButtonWrapper>
          <BackButton onClick={() => setReservationPage("first")} />
        </BackButtonWrapper>
      ) : null}
      <HeaderImage
        src={
          reservationPage === "first" || !isPhone ? "/images/restauranfood.jpg" : "/images/fish.jpg"
        }
      />

      <StyledSection>
        <RegistrationForm $reservationPage={reservationPage} onSubmit={handleSubmit(onSubmit)}>
          <SectionTittle>
            {reservationPage === "first" ? "Reserve a table" : "Details"}
          </SectionTittle>

          <ReservationScreen1
            enabledScreen={reservationPage === "first"}
            isPhone={isPhone}
            register={register}
            errors={errors}
            calendarDefaultValue={defaultValues?.date}
            validHours={validHours}
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
            <StyledButton value="Send Reservation" type="submit" loading={isLoading} />
          )}
        </RegistrationForm>
      </StyledSection>
    </ReservationWrapper>
  );
};

export default ReservationPage;
