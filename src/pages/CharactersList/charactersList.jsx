/* eslint-disable react/prop-types */
import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";
import { TiHeart } from "../../assets/icons";
import { popularity } from "../../reducers/CharacterSlice";
import { useState } from "react";
import Pagination from "../../utils/Pagination";

const CharactersList = ({
  characters,
  totalPages,
  // currentPage,
  // setCurrentPage,
  pageSection,
  setPageSection,
}) => {
  const dispatch = useDispatch();
  const { isLoading, error, message } = useSelector((state) => state.character);

  if (isLoading) {
    return <div>Loading...</div>;
  }

  if (error) {
    return <div>Error: {message}</div>;
  }

  const handlePopularity = (charId) => {
    dispatch(popularity(charId));
  };

  return (
    <>
      <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-2 mb-4">
        {characters?.length && Array.isArray(characters)
          ? characters?.map((character) => (
              <div
                key={character.id}
                className="listing_box bg-neutral-900 h-[295px] relative rounded-lg overflow-hidden transition ease-in-out delay-150 hover:-translate-y-1 hover:scale-110 duration-300"
              >
                <Link to="/character-details" state={{ id: character.id }}>
                  <img
                    src={character.character_photo}
                    className="w-full"
                    alt={`Character ${character.name}`}
                  />
                  <div className="listing_box_shadow absolute">&nbsp;</div>
                  <div className="listing_box_cont absolute">
                    <p className="text-white pb-1">
                      {character.name}:{" "}
                      <span>
                        {character.introduction.length > 15
                          ? character.introduction.substring(0, 15) + "..."
                          : character.introduction}
                      </span>
                    </p>
                  </div>
                </Link>
                <div className="absolute right-[10px] bottom-[5px] cursor-pointer">
                  <TiHeart
                    className="text-red-600 hover:text-white"
                    onClick={() => {
                      handlePopularity(character.id);
                    }}
                  />
                </div>

                {/* show only primary tags */}
                <div className="absolute left-1 bottom-[55px]">
                  <div className="grid grid-cols-2 gap-1 my-2 lg:grid-cols-2">
                    {character?.tags?.length &&
                      character?.tags?.map(
                        (tag, ind) =>
                          tag.secondary_tag === 0 &&
                          ind < 4 && (
                            <div
                              key={`tag_id_${ind}`}
                              className="flex justify-center items-center px-2 border border-red-900 text-[12px] leading-[12px] text-center font-medium rounded-md text-red-900 py-1 bg-white hover:bg-[#f6ecec] cursor-pointer"
                            >
                              {/* {tag.tag_name} */}
                              {tag.tag_name.length > 6
                                ? tag.tag_name.substring(0, 6) + ".."
                                : tag.tag_name}
                            </div>
                          )
                      )}
                  </div>
                </div>
              </div>
            ))
          : "No data found"}
      </div>
      <Pagination
        // currentPage={currentPage}
        totalPages={totalPages}
        // setCurrentPage={setCurrentPage}
        pageSection={pageSection}
        setPageSection={setPageSection}
      />
    </>
  );
};

export default CharactersList;
