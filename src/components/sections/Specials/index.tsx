import Button from "../../../ui/Button/Button";

const Specials = () => {
  return (
    <section>
      <p>This weeks specials</p>

      <div>
        <h5>Greek Salad</h5>
        <h6>$12.99</h6>
        <p>
          Refreshing salad, made with tomato, lettuce, feta cheese, and olives. Dressed with salt,
          hot pepper, and olive oil.
        </p>
        <Button>Order for Delivery</Button>
      </div>

      <div>
        <h5>Bruschetta</h5>
        <h6>$16.99</h6>
        <p>
          Toasted bread, topped with tomato, prosciutto, and cheese. Seasoned with salt and olive
          oil.
        </p>
        <Button>Order for Delivery</Button>
      </div>

      <div>
        <h5>Lemon Dessert</h5>
        <h6>$8.50</h6>
        <p>Fresh baked lemon bread coated in salt and sugar. Powdered in citrus and lemon zest.</p>
        <Button>Order for Delivery</Button>
      </div>
    </section>
  );
};

export default Specials;
