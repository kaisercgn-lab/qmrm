/** @jest-environment jsdom */
import { GlobalRegistrator } from '@happy-dom/global-registrator';
import { expect, test, mock, afterEach, afterAll, beforeAll } from "bun:test";
import { render, fireEvent, cleanup } from "@testing-library/react";
import { LanguageToggle } from "../LanguageToggle";

beforeAll(() => {
    GlobalRegistrator.register();
});

const mockSetLocale = mock();
let currentLocale = "de";

mock.module("../../i18n", () => {
    return {
        useLocale: () => ({
            locale: currentLocale,
            setLocale: mockSetLocale
        })
    }
});

afterEach(() => {
    mockSetLocale.mockClear();
    cleanup();
});

afterAll(() => {
    GlobalRegistrator.unregister();
});

test("renders buttons and handles interaction when default locale is 'de'", () => {
    currentLocale = "de";
    const { getByText, getByRole } = render(<LanguageToggle />);
    expect(getByRole("group").getAttribute("aria-label")).toBe("Language toggle");

    const deBtn = getByText("DE");
    const enBtn = getByText("EN");

    expect(deBtn.className).toBe("active");
    expect(deBtn.getAttribute("aria-pressed")).toBe("true");

    expect(enBtn.className).toBe("");
    expect(enBtn.getAttribute("aria-pressed")).toBe("false");

    fireEvent.click(enBtn);
    expect(mockSetLocale).toHaveBeenCalledWith("en");
    expect(mockSetLocale).toHaveBeenCalledTimes(1);

    fireEvent.click(deBtn);
    expect(mockSetLocale).toHaveBeenCalledWith("de");
    expect(mockSetLocale).toHaveBeenCalledTimes(2);
});

test("renders buttons correctly when locale is 'en'", () => {
    currentLocale = "en";
    const { getByText } = render(<LanguageToggle />);

    const deBtn = getByText("DE");
    const enBtn = getByText("EN");

    expect(deBtn.className).toBe("");
    expect(deBtn.getAttribute("aria-pressed")).toBe("false");

    expect(enBtn.className).toBe("active");
    expect(enBtn.getAttribute("aria-pressed")).toBe("true");
});
