import React from 'react'

const Footer = () => {
  return (
    <div>
      <div className="map">
        <iframe
          href="https://maps.google.com/maps?ll=40.764443,-73.828732&z=15&t=m&hl=en-US&gl=US&mapclient=apiv3"
          style={{ border: 0, width: "100%", height: "100%" }}
          allowFullScreen=""
          loading="lazy"
          title="map"
        />
      </div>
    </div>
  );
}

export default Footer