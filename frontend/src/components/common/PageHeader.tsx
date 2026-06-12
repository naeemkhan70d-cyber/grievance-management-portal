import SearchInput from "./SearchInput";
import Button from "./Button";

interface PageHeaderProps {
  title: string;
  search?: string;
  onSearch?: (
    value: string
  ) => void;
  searchPlaceholder?: string;
  buttonText?: string;
  onButtonClick?: () => void;
}

const PageHeader = ({
  title,
  search,
  onSearch,
  searchPlaceholder = "Search...",
  buttonText,
  onButtonClick,
}: PageHeaderProps) => {
  return (
    <div className="mb-6 flex items-center justify-between gap-4">
      <h1 className="text-2xl font-bold">
        {title}
      </h1>

      <div className="flex items-center gap-3">
        {onSearch && (
          <SearchInput
            value={search ?? ""}
            onChange={(e) =>
              onSearch(
                e.target.value
              )
            }
            placeholder={
              searchPlaceholder
            }
          />
        )}

        {buttonText && (
          <Button
            onClick={onButtonClick}
          >
            {buttonText}
          </Button>
        )}
      </div>
    </div>
  );
};

export default PageHeader;