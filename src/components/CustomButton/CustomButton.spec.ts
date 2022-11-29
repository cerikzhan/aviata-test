import { fireEvent, render } from "@testing-library/vue";
import CustomButton from "@/components/CustomButton/CustomButton.vue";

describe("components/CustomButton", () => {
  it("renders text passed in slot", () => {
    const text = "Add to cart";
    const { container } = render(CustomButton, {
      slots: {
        default: text,
      },
    });

    expect(container.textContent).toMatch(text);
  });

  it("emits click event when clicked", () => {
    const text = "Add to cart";
    const { getByText, emitted } = render(CustomButton, {
      slots: {
        default: text,
      },
    });

    const button = getByText(text);

    fireEvent.click(button);
    expect(emitted()).toHaveProperty("click");
  });
});
