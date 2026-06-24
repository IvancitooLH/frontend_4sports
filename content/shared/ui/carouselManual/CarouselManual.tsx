"use client";

import React, { useCallback, useEffect, useState } from "react";
import useEmblaCarousel from "embla-carousel-react";

type CarouselManualProps<T> = {
  items: T[];
  renderItem: (item: T, index: number) => React.ReactNode;

  columns?: number; // 👈 cuántas visibles
  gap?: number;

  fetchMore?: () => Promise<void>;
  hasMore?: boolean;
};

export function CarouselManual<T>({
  items,
  renderItem,
  columns = 3,
  gap = 16,
  fetchMore,
  hasMore = false,
}: CarouselManualProps<T>) {
  const [loadingMore, setLoadingMore] = useState(false);

  const [emblaRef, emblaApi] = useEmblaCarousel({
    align: "center",
    dragFree: false,
  });

  const canScrollPrev = useCallback(() => {
    if (!emblaApi) return false;
    return emblaApi.canScrollPrev();
  }, [emblaApi]);

  const canScrollNext = useCallback(() => {
    if (!emblaApi) return false;
    return emblaApi.canScrollNext();
  }, [emblaApi]);

  const scrollPrev = () => emblaApi?.scrollPrev();
  const scrollNext = () => emblaApi?.scrollNext();

  // Detectar cuando llegas al final → disparar fetchMore
  const handleSelect = useCallback(async () => {
    if (!emblaApi || !fetchMore || loadingMore || !hasMore) return;

    const isLast = !emblaApi.canScrollNext();

    if (isLast) {
      setLoadingMore(true);
      await fetchMore();
      setLoadingMore(false);
    }
  }, [emblaApi, fetchMore, loadingMore, hasMore]);

  useEffect(() => {
    if (!emblaApi) return;

    emblaApi.on("select", handleSelect);
    emblaApi.on("reInit", handleSelect);

    const setSelect = () => {
      handleSelect();
    };

    setSelect();
  }, [emblaApi, handleSelect]);

  return (
    <div className="relative w-full">
      {/* Controles */}
      {canScrollPrev() && (
        <button
          onClick={scrollPrev}
          className="absolute left-0 top-1/2 -translate-y-1/2 z-10"
        >
          ←
        </button>
      )}

      {canScrollNext() && (
        <button
          onClick={scrollNext}
          className="absolute right-0 top-1/2 -translate-y-1/2 z-10"
        >
          →
        </button>
      )}

      {/* Viewport */}
      <div ref={emblaRef} className="overflow-hidden">
        <div
          className="flex"
          style={{
            gap,
          }}
        >
          {items.map((item, i) => (
            <div
              key={i}
              className="flex-shrink-0"
              style={{
                flexBasis: `${100 / columns}%`,
              }}
            >
              {renderItem(item, i)}
            </div>
          ))}

          {/* 👇 Botón Ver más como item */}
          {hasMore && (
            <div
              className="flex-shrink-0 flex items-center justify-center"
              style={{
                flexBasis: `${100 / columns}%`,
              }}
            >
              <button
                onClick={async () => {
                  if (!fetchMore || loadingMore) return;
                  setLoadingMore(true);
                  await fetchMore();
                  setLoadingMore(false);
                }}
                className="w-full h-full flex items-center justify-center border rounded-lg"
              >
                {loadingMore ? (
                  <span className="animate-spin">⏳</span>
                ) : (
                  "Ver más"
                )}
              </button>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}
