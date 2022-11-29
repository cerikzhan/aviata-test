import { fireEvent, render } from "@testing-library/vue";
import CustomCheckbox from "@/components/CustomCheckbox/CustomCheckbox.vue";

describe("components/CustomCheckbox", () => {
  it("renders checkbox with given label", () => {
    const label = "Test label";
    const { container } = render(CustomCheckbox, {
      slots: {
        default: label,
      },
    });

    expect(container.textContent).toMatch(label);
  });

  it("emits boolean if single checkbox bind", () => {
    const value = "KC";
    const label = "Test label";
    const { getByLabelText, emitted } = render(CustomCheckbox, {
      props: {
        value,
      },
      slots: {
        default: label,
      },
    });

    const input = getByLabelText(label);
    fireEvent.click(input);
    expect(emitted()["update:modelValue"][0]).toStrictEqual([true]);
  });

  it("emits array of values if multiple checkboxes binds to one array", () => {
    const value = "KC";
    const label = "Test label";
    const { getByLabelText, emitted } = render(CustomCheckbox, {
      props: {
        value,
        modelValue: [],
      },
      slots: {
        default: label,
      },
    });

    const input = getByLabelText(label);
    fireEvent.click(input);
    expect(emitted()["update:modelValue"][0]).toStrictEqual([[value]]);
  });
});
