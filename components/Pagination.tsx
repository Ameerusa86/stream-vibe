import {
  Pagination,
  PaginationContent,
  PaginationEllipsis,
  PaginationItem,
  PaginationLink,
  PaginationNext,
  PaginationPrevious,
} from "@/components/ui/pagination";

interface PaginationComponentProps {
  currentPage: number;
  totalPages: number;
  onPageChange: (page: number) => void;
}

export function PaginationComponent({
  currentPage,
  totalPages,
  onPageChange,
}: PaginationComponentProps) {
  const handlePrevious = () => {
    if (currentPage > 1) {
      onPageChange(currentPage - 1);
    }
  };

  const handleNext = () => {
    if (currentPage < totalPages) {
      onPageChange(currentPage + 1);
    }
  };

  return (
    <Pagination className="mt-10 flex justify-center space-x-2 text-gray-400 cursor-pointer">
      <PaginationContent className="flex items-center">
        {/* Previous Button */}
        <PaginationItem>
          <PaginationPrevious
            onClick={handlePrevious}
            className="px-3 py-1 rounded-lg bg-black-10 hover:bg-black-20 text-white transition-colors duration-200"
          >
            Previous
          </PaginationPrevious>
        </PaginationItem>

        {/* Page Links */}
        {[...Array(totalPages > 3 ? 3 : totalPages)].map((_, index) => (
          <PaginationItem key={index}>
            <PaginationLink
              onClick={() => onPageChange(index + 1)}
              isActive={currentPage === index + 1}
              className={`px-3 py-1 rounded-lg ${
                currentPage === index + 1
                  ? "bg-red-500 text-white font-semibold shadow-lg"
                  : "bg-black-10 hover:bg-black-20 text-white transition-colors duration-200"
              }`}
            >
              {index + 1}
            </PaginationLink>
          </PaginationItem>
        ))}

        {/* Ellipsis for skipped pages */}
        {totalPages > 3 && (
          <PaginationEllipsis className="px-2 py-1 text-gray-600" />
        )}

        {/* Next Button */}
        <PaginationItem>
          <PaginationNext
            onClick={handleNext}
            className="px-3 py-1 rounded-lg bg-black-10 hover:bg-black-20 text-white transition-colors duration-200"
          >
            Next
          </PaginationNext>
        </PaginationItem>
      </PaginationContent>
    </Pagination>
  );
}
