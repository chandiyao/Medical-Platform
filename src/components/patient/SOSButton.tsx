import React from "react";

export function SOSButton() {
  // TODO: Integrate GPS and ambulance call logic
  return (
    <button className="fixed bottom-8 right-8 z-50 bg-red-600 text-white px-6 py-3 rounded-full shadow-lg font-bold text-lg hover:bg-red-700 transition-all">
      🚨 Emergency SOS
    </button>
  );
}
