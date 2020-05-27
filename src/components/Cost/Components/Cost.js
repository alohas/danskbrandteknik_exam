import React from "react";

//Styles
import "./Cost.scss";

function Cost() {
  return (
    <section id="Cost">
      <h1 className="cost-header">Damage Cost</h1>
      <div className="paragraphs">
        <p>
          In most instances, fire protection is “peanuts” and a general
          statement could be called out that most companies and institutions
          spend far more money on coffee than on fire protection. It is not the
          financial amount that scares them, but it is the fact that they do not
          see that fire is a real risk and could have serious consequences for
          them. This leads to an attitude: “It is a waste of money” and
          sometimes concludes to reducing the amount spent on protection and
          prevention to an absolute zero.
        </p>
        <p>
          The Insurance industry, the fire authorities and civil engineers
          involved in fire protection all agree that the total cost of damages
          from fires in Denmark is far more than 5 billion DKK annually (this is
          exclusive of the cost for operating fire brigades and etc.).
          Compensations from insurance companies also show more than 5 billion
          DKK. That is more than 13 million DKK every 24 hours.
        </p>
        <p>
          In general, the total cost per day for fire protection in most
          companies or institutions is often less than 1 DKK day/employee – when
          they rent the equipment via Rental and Maintenance Agreement. So we
          are talking about the absolute minimum amount - “peanuts”.
        </p>
      </div>
    </section>
  );
}

export default Cost;
