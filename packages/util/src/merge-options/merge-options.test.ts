import { mergeOptions } from "./merge-options";

describe("mergeOptions", () => {
  it("should merge user options with default options", () => {
    // Arrange
    const userOptions = {
      option1: "value1",
      option2: "value2",
      nestedOptions: {
        nestedOption1: "nestedValue1",
        nestedOption2: "nestedValue2",
      },
    };
    const defaultOptions = {
      option1: "default1",
      option3: "default3",
      nestedOptions: {
        nestedOption1: "defaultNestedValue1",
        nestedOption3: "defaultNestedValue3",
      },
    };

    const mergedOptions = mergeOptions(userOptions, defaultOptions);

    expect(mergedOptions).toEqual({
      option1: "value1",
      option2: "value2",
      option3: "default3",
      nestedOptions: {
        nestedOption1: "nestedValue1",
        nestedOption2: "nestedValue2",
        nestedOption3: "defaultNestedValue3",
      },
    });
  });
  it("should merge successfully very nested object", () => {
    // Arrange
    const userOptions = {
      option1: "value1",
      option2: "value2",
      nestedOptions: {
        nestedOption1: "nestedValue1",
        nestedOption2: "nestedValue2",
        nestedOptions: {
          nestedNestedOption1: "nestedNestedValue1",
          nestedNestedOption2: "nestedNestedValue2",
        },
      },
    };
    const defaultOptions = {
      option1: "default1",
      option3: "default3",
      nestedOptions: {
        nestedOption1: "defaultNestedValue1",
        nestedOption3: "defaultNestedValue3",
        nestedOptions: {
          nestedNestedOption1: "defaultNestedNestedValue1",
          nestedNestedOption3: "defaultNestedNestedValue3",
        },
      },
    };

    const mergedOptions = mergeOptions(userOptions, defaultOptions);

    expect(mergedOptions).toEqual({
      option1: "value1",
      option2: "value2",
      option3: "default3",
      nestedOptions: {
        nestedOption1: "nestedValue1",
        nestedOption2: "nestedValue2",
        nestedOption3: "defaultNestedValue3",
        nestedOptions: {
          nestedNestedOption1: "nestedNestedValue1",
          nestedNestedOption2: "nestedNestedValue2",
          nestedNestedOption3: "defaultNestedNestedValue3",
        },
      },
    });
  });

  it("should merge successfully if first argument is undefined", () => {
    // Arrange
    const userOptions = undefined;
    const defaultOptions = {
      option1: "default1",
      option3: "default3",
      nestedOptions: {
        nestedOption1: "defaultNestedValue1",
        nestedOption3: "defaultNestedValue3",
        nestedOptions: {
          nestedNestedOption1: "defaultNestedNestedValue1",
          nestedNestedOption3: "defaultNestedNestedValue3",
        },
      },
    };

    const mergedOptions = mergeOptions(userOptions!, defaultOptions);

    expect(mergedOptions).toEqual({
      option1: "default1",
      option3: "default3",
      nestedOptions: {
        nestedOption1: "defaultNestedValue1",
        nestedOption3: "defaultNestedValue3",
        nestedOptions: {
          nestedNestedOption1: "defaultNestedNestedValue1",
          nestedNestedOption3: "defaultNestedNestedValue3",
        },
      },
    });
  });

  it("should merge successfullly if first argument is null or falsy value", () => {
    // Arrange
    const userOptions = null;
    const defaultOptions = {
      option1: "default1",
      nestedOptions: {
        nestedOption1: "defaultNestedValue1",
        nestedOption3: "defaultNestedValue3",
        nestedOptions: {
          nestedNestedOption1: "defaultNestedNestedValue1",
          nestedNestedOption3: "defaultNestedNestedValue3",
        },
      },
    };

    const mergedOptions = mergeOptions(userOptions!, defaultOptions);

    expect(mergedOptions).toEqual({
      option1: "default1",
      nestedOptions: {
        nestedOption1: "defaultNestedValue1",
        nestedOption3: "defaultNestedValue3",
        nestedOptions: {
          nestedNestedOption1: "defaultNestedNestedValue1",
          nestedNestedOption3: "defaultNestedNestedValue3",
        },
      },
    });
  });

  it("should merge defaultValue if first argument key is in but value is undefined", () => {
    // Arrange
    const userOptions = {
      option1: undefined,
      nestedOptions: {
        nestedOption1: undefined,
        nestedOptions: {
          nestedNestedOption1: undefined,
        },
      },
    };
    const defaultOptions = {
      option1: "default1",
      nestedOptions: {
        nestedOption1: "defaultNestedValue1",
        nestedOptions: {
          nestedNestedOption1: "defaultNestedNestedValue1",
          nestedNestedOption3: "defaultNestedNestedValue3",
        },
      },
    };

    const mergedOptions = mergeOptions(userOptions, defaultOptions);

    expect(mergedOptions).toEqual({
      option1: "default1",
      nestedOptions: {
        nestedOption1: "defaultNestedValue1",
        nestedOptions: {
          nestedNestedOption1: "defaultNestedNestedValue1",
          nestedNestedOption3: "defaultNestedNestedValue3",
        },
      },
    });
  });

  it('should merge first value if argument value is null or false or "" or 0', () => {
    const userOptions = {
      option1: null,
      option2: false,
      option3: 0,
      option4: "",
    };
    const defaultOptions: {
      option1: string | null;
      option2: boolean | null;
      option3: number | null;
      option4: string | null;
    } = {
      option1: "default1",
      option2: true,
      option3: 2,
      option4: "default4",
    };

    expect(mergeOptions(userOptions!, defaultOptions)).toEqual({
      option1: null,
      option2: false,
      option3: 0,
      option4: "",
    });
  });
});
