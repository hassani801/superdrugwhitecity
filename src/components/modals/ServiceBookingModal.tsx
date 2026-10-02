import React, { useState } from "react";
import { motion, AnimatePresence } from "motion/react";
import { X, Calendar, Clock, CheckCircle2, ShieldCheck, MapPin, Sparkles } from "lucide-react";
import { storeServices, StoreService } from "../../data/services";
import { storeData } from "../../data/store";

interface ServiceBookingModalProps {
  isOpen: boolean;
  onClose: () => void;
  selectedService?: StoreService | null;
}

export const ServiceBookingModal: React.FC<ServiceBookingModalProps> = ({
  isOpen,
  onClose,
  selectedService
}) => {
  const [activeServiceId, setActiveServiceId] = useState<string>(
    selectedService?.id || storeServices[0].id
  );
  const [selectedDate, setSelectedDate] = useState<string>("Today");
  const [selectedTime, setSelectedTime] = useState<string>("14:30");
  const [fullName, setFullName] = useState("");
  const [phone, setPhone] = useState("");
  const [isSubmitted, setIsSubmitted] = useState(false);

  // Sync if selectedService prop updates
  React.useEffect(() => {
    if (selectedService) {
      setActiveServiceId(selectedService.id);
    }
  }, [selectedService]);

  const currentService = storeServices.find((s) => s.id === activeServiceId) || storeServices[0];

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!fullName || !phone) return;
    setIsSubmitted(true);
  };

  const handleReset = () => {
    setIsSubmitted(false);
    onClose();
  };

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-50 bg-black/60 backdrop-blur-xs flex items-center justify-center p-4 sm:p-6 overflow-y-auto">
      <motion.div
        initial={{ opacity: 0, scale: 0.95, y: 15 }}
        animate={{ opacity: 1, scale: 1, y: 0 }}
        exit={{ opacity: 0, scale: 0.95 }}
        transition={{ duration: 0.25, ease: [0.16, 1, 0.3, 1] }}
        className="bg-white rounded-2xl max-w-xl w-full overflow-hidden shadow-2xl border border-[#E8E3E6] my-8"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Modal Header */}
        <div className="p-6 border-b border-[#E8E3E6] flex items-center justify-between bg-[#F8F6F7]">
          <div>
            <div className="flex items-center gap-1.5 text-[10px] font-bold tracking-widest uppercase text-[#EC008C]">
              <span className="w-1.5 h-1.5 rounded-full bg-[#EC008C]" />
              <span>SUPERDRUG CLINIC & STUDIO</span>
            </div>
            <h3 className="font-heading font-black text-xl text-[#231F20] mt-0.5">
              Book In-Store Appointment
            </h3>
            <p className="text-xs text-[#707070]">
              Westfield London (White City) · Ground Floor Suite
            </p>
          </div>
          <button
            onClick={onClose}
            className="w-8 h-8 rounded-full border border-[#E8E3E6] bg-white flex items-center justify-center hover:bg-[#F8F6F7] transition-colors"
          >
            <X className="w-4 h-4 text-[#231F20]" />
          </button>
        </div>

        {/* Modal Body */}
        <div className="p-6">
          {isSubmitted ? (
            <div className="text-center py-8 space-y-4">
              <div className="w-16 h-16 rounded-full bg-emerald-50 text-emerald-600 border border-emerald-200 flex items-center justify-center mx-auto">
                <CheckCircle2 className="w-8 h-8" />
              </div>
              <h4 className="font-heading font-black text-2xl text-[#231F20]">
                Appointment Reserved!
              </h4>
              <p className="text-sm text-[#707070] max-w-md mx-auto">
                Thank you, <strong className="text-[#231F20]">{fullName}</strong>. Your slot for{" "}
                <strong className="text-[#EC008C]">{currentService.title}</strong> has been
                scheduled for <strong className="text-[#231F20]">{selectedDate} at {selectedTime}</strong>.
              </p>

              <div className="p-4 bg-[#F8F6F7] rounded-xl border border-[#E8E3E6] text-xs text-left space-y-2 max-w-md mx-auto">
                <div className="flex justify-between">
                  <span className="text-[#707070]">Location:</span>
                  <span className="font-semibold text-[#231F20]">Superdrug White City, Ground Floor</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-[#707070]">Estimated Duration:</span>
                  <span className="font-semibold text-[#231F20]">{currentService.leadTime}</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-[#707070]">Confirmation SMS:</span>
                  <span className="font-semibold text-[#231F20]">Sent to {phone}</span>
                </div>
              </div>

              <button
                onClick={handleReset}
                className="mt-6 px-6 py-3 bg-[#231F20] hover:bg-[#EC008C] text-white text-xs font-bold tracking-widest uppercase rounded-md transition-colors"
              >
                CLOSE
              </button>
            </div>
          ) : (
            <form onSubmit={handleSubmit} className="space-y-6">
              {/* Service Select Pills */}
              <div>
                <label className="block text-xs font-bold uppercase tracking-wider text-[#231F20] mb-2">
                  Select Clinic or Studio Service
                </label>
                <div className="grid grid-cols-2 gap-2">
                  {storeServices.map((service) => (
                    <button
                      key={service.id}
                      type="button"
                      onClick={() => setActiveServiceId(service.id)}
                      className={`p-3 text-left rounded-xl border transition-all text-xs ${
                        activeServiceId === service.id
                          ? "border-[#EC008C] bg-[#EC008C]/5 font-bold text-[#231F20] shadow-xs"
                          : "border-[#E8E3E6] hover:border-[#231F20]/40 text-[#707070]"
                      }`}
                    >
                      <div className="flex items-center justify-between">
                        <span className="font-mono text-[10px] text-[#EC008C]">
                          {service.number}
                        </span>
                        <span className="text-[10px] text-[#707070]">{service.leadTime}</span>
                      </div>
                      <div className="font-heading font-bold text-[#231F20] mt-1 line-clamp-1">
                        {service.title}
                      </div>
                    </button>
                  ))}
                </div>
              </div>

              {/* Date & Time Picker */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div>
                  <label className="block text-xs font-bold uppercase tracking-wider text-[#231F20] mb-2 flex items-center gap-1.5">
                    <Calendar className="w-3.5 h-3.5 text-[#EC008C]" />
                    <span>Preferred Day</span>
                  </label>
                  <select
                    value={selectedDate}
                    onChange={(e) => setSelectedDate(e.target.value)}
                    className="w-full p-2.5 bg-[#F8F6F7] border border-[#E8E3E6] rounded-lg text-xs font-medium text-[#231F20] focus:border-[#EC008C] outline-hidden"
                  >
                    <option value="Today">Today (Walk-in Available)</option>
                    <option value="Tomorrow">Tomorrow</option>
                    <option value="This Saturday">This Saturday</option>
                    <option value="This Sunday">This Sunday</option>
                    <option value="Next Week">Next Week</option>
                  </select>
                </div>

                <div>
                  <label className="block text-xs font-bold uppercase tracking-wider text-[#231F20] mb-2 flex items-center gap-1.5">
                    <Clock className="w-3.5 h-3.5 text-[#EC008C]" />
                    <span>Time Window</span>
                  </label>
                  <select
                    value={selectedTime}
                    onChange={(e) => setSelectedTime(e.target.value)}
                    className="w-full p-2.5 bg-[#F8F6F7] border border-[#E8E3E6] rounded-lg text-xs font-medium text-[#231F20] focus:border-[#EC008C] outline-hidden"
                  >
                    <option value="10:30">10:30 AM (Quiet Morning)</option>
                    <option value="12:00">12:00 PM (Lunch Break)</option>
                    <option value="14:30">14:30 PM (Afternoon)</option>
                    <option value="17:00">17:00 PM (Post-Work)</option>
                    <option value="19:30">19:30 PM (Evening Shopping)</option>
                  </select>
                </div>
              </div>

              {/* Personal Contact Inputs */}
              <div className="space-y-3">
                <div>
                  <label className="block text-xs font-bold uppercase tracking-wider text-[#231F20] mb-1">
                    Your Full Name
                  </label>
                  <input
                    type="text"
                    required
                    placeholder="e.g. Maya Chen"
                    value={fullName}
                    onChange={(e) => setFullName(e.target.value)}
                    className="w-full p-2.5 border border-[#E8E3E6] rounded-lg text-xs text-[#231F20] focus:border-[#EC008C] outline-hidden"
                  />
                </div>

                <div>
                  <label className="block text-xs font-bold uppercase tracking-wider text-[#231F20] mb-1">
                    Mobile Number (for SMS Confirmation)
                  </label>
                  <input
                    type="tel"
                    required
                    placeholder="e.g. 07700 900123"
                    value={phone}
                    onChange={(e) => setPhone(e.target.value)}
                    className="w-full p-2.5 border border-[#E8E3E6] rounded-lg text-xs text-[#231F20] focus:border-[#EC008C] outline-hidden"
                  />
                </div>
              </div>

              {/* Confirmation Notice */}
              <div className="p-3 bg-[#F8F6F7] rounded-lg text-[11px] text-[#707070] flex items-center gap-2">
                <ShieldCheck className="w-4 h-4 text-emerald-600 shrink-0" />
                <span>
                  No upfront charge. Pay in-store at Superdrug White City after your consultation or treatment.
                </span>
              </div>

              <div className="flex items-center justify-end gap-3 pt-2">
                <button
                  type="button"
                  onClick={onClose}
                  className="px-4 py-2.5 text-xs font-semibold text-[#707070] hover:text-[#231F20]"
                >
                  Cancel
                </button>
                <button
                  type="submit"
                  className="px-6 py-2.5 bg-[#EC008C] hover:bg-[#d1007b] text-white text-xs font-bold uppercase tracking-wider rounded-md transition-colors shadow-xs"
                >
                  CONFIRM RESERVATION
                </button>
              </div>
            </form>
          )}
        </div>
      </motion.div>
    </div>
  );
};
