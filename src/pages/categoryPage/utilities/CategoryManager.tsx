import { NotFoundCategory } from "../../../utilities/ErrorFactory";

enum AllowedCategory {
  electronics = "electronics",
  elothing = "clothing",
}

type CategoryResult = AllowedCategory;

function categoryManager(categoryType: string | undefined): CategoryResult {
  if (!categoryType) {
    throw new NotFoundCategory("the category must be passed");
  }

  const normalizedCategory = categoryType.toLowerCase().trim();

  if (!(normalizedCategory in AllowedCategory)) {
    throw new NotFoundCategory(
      `the category '${categoryType}' is not available`
    );
  }

  return normalizedCategory as AllowedCategory;
}

export default categoryManager;
