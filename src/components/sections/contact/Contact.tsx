import { contactSchema, type ContactFormData } from "@/schema/contactSchema";
import { zodResolver } from "@hookform/resolvers/zod";
import { Controller, useForm } from "react-hook-form";
import { actions } from "astro:actions";
import { toast, Toaster } from "react-hot-toast";
import { Button, Input, Label } from "@/components/ui";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import FormField from "./FormField";

function Contact() {
  const {
    control,
    register,
    handleSubmit,
    formState: { errors, isSubmitting },
    reset,
  } = useForm({ resolver: zodResolver(contactSchema) });

  const notifySuccess = () => toast.success("Message sent successfuly!");
  const notifyError = () =>
    toast.error("Something went wrong. Try again later.");

  const onSubmit = async (data: ContactFormData) => {
    try {
      const { error } = await actions.send(data);
      if (error) {
        notifyError();
      } else {
        notifySuccess();
        reset();
      }
    } catch (error) {
      console.error("Submission error", error);
    }
  };
  return (
    <section
      id="contact"
      className="bg-surface-dark text-surface-dark-foreground py-20"
    >
      <div className="max-w-7xl mx-auto px-5">
        <h2 className="mb-5 text-center">Contact Us</h2>
        <form onSubmit={handleSubmit(onSubmit)}>
          <div className="min-md:grid min-md:grid-cols-2 max-md: min-md:gap-5 max-md:space-y-5">
            <FormField
              id="first-name"
              label="First Name"
              error={errors.firstName}
              {...register("firstName")}
              placeholder="First Name"
            />
            <FormField
              id="last-name"
              label="Last Name"
              error={errors.lastName}
              {...register("lastName")}
              placeholder="Last Name"
            />

            <FormField
              id="email"
              label="Email"
              error={errors.email}
              type="email"
              {...register("email")}
              placeholder="Email"
            />

            <FormField
              id="phone"
              label="Phone"
              error={errors.phone}
              type="tel"
              {...register("phone")}
              placeholder="Phone"
            />

            <FormField
              id="guest-count"
              label="Number of Guests"
              error={errors.guestCount}
              type="number"
              defaultValue={0}
              {...register("guestCount")}
            />

            <div className="flex flex-col gap-2">
              <Label htmlFor="event-date">Date of Event</Label>
              <Controller
                control={control}
                name="dateOfEvent"
                rules={{}}
                render={({ field }) => (
                  <DatePicker
                    id="event-date"
                    minDate={new Date()}
                    selected={field.value}
                    withPortal
                    autoComplete="off"
                    placeholderText={new Date().toLocaleDateString()}
                    onChange={(date) => field.onChange(date)}
                    ariaInvalid={errors.dateOfEvent ? "true" : undefined}
                    customInput={
                      <Input
                        aria-invalid={!!errors.dateOfEvent}
                        inputMode="none"
                        style={{ paddingLeft: "2rem" }}
                      />
                    }
                    showIcon
                    toggleCalendarOnIconClick
                    icon={
                      <div className="top-1/2 -translate-y-1/2">
                        <svg
                          viewBox="0 0 24 24"
                          fill="currentColor"
                          xmlns="http://www.w3.org/2000/svg"
                        >
                          <g>
                            <path
                              strokeLinecap="round"
                              d="M19,4H17V3a1,1,0,0,0-2,0V4H9V3A1,1,0,0,0,7,3V4H5A3,3,0,0,0,2,7V19a3,3,0,0,0,3,3H19a3,3,0,0,0,3-3V7A3,3,0,0,0,19,4Zm1,15a1,1,0,0,1-1,1H5a1,1,0,0,1-1-1V12H20Zm0-9H4V7A1,1,0,0,1,5,6H7V7A1,1,0,0,0,9,7V6h6V7a1,1,0,0,0,2,0V6h2a1,1,0,0,1,1,1Z"
                            ></path>
                          </g>
                        </svg>
                      </div>
                    }
                  />
                )}
              />
              {errors.dateOfEvent && (
                <p className="text-sm text-error">
                  {errors.dateOfEvent.message}
                </p>
              )}
            </div>

            <FormField
              id="messsage"
              label="Message"
              error={errors.message}
              as="textarea"
              className="col-span-2"
              {...register("message")}
              placeholder="Message"
            />

            <div className="flex justify-center col-span-2">
              <Button variant="primary" disabled={isSubmitting} type="submit">
                {isSubmitting ? "Sending" : "Send Message"}
              </Button>
            </div>
          </div>
        </form>
      </div>
      <Toaster
        position="top-center"
        toastOptions={{
          duration: 5000,
          success: {
            style: {
              background: "green",
              color: "white",
            },
            iconTheme: {
              primary: "white",
              secondary: "green",
            },
          },
          error: {
            style: {
              background: "red",
              color: "white",
            },
            iconTheme: {
              primary: "white",
              secondary: "red",
            },
          },
        }}
      />
    </section>
  );
}

export default Contact;
