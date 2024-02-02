import { Link, useLocation } from 'react-router-dom';
import {
  FcLock,
  TiHeart,
  FcBusinessman,
  FcReadingEbook,
  FcBusinesswoman,
  AiFillWechat,
  AiFillLike,
  AiFillDislike,
} from '../../assets/icons';
import { Tooltip } from 'flowbite-react';
import { Accordion } from 'flowbite-react';
import { useDispatch, useSelector } from 'react-redux';
import { useEffect, useState } from 'react';
import { getCharacterById, popularity } from '../../reducers/CharacterSlice';
import { convertToReadableFormat } from '../../utils/DateFormatter';
import { userFace } from '../../assets/images/images';
import PageLoader from '../../ui/layout/loader/PageLoader';

const CharacterDetails = () => {
  const location = useLocation();
  const dispatch = useDispatch();

  const { characterDetails, isLoading } = useSelector(
    (state) => state.character
  );

  const [charDetails, setCharDetails] = useState();

  const id = location.state.id;

  const handlePopularity = (charId) => {
    dispatch(popularity(charId));
  };

  useEffect(() => {
    dispatch(getCharacterById(id));
  }, []);

  useEffect(() => {
    if (Object.keys(characterDetails).length) {
      setCharDetails(characterDetails);
    }
  }, [characterDetails]);
  return (
    <div className='create_character_wrap px-3 md:px-0 ml-0 md:ml-4'>
      {/* CharacterDetails section start here */}
      <div className='py-0 lg:py-0'>
        <div className='container mx-auto my-0'>
          <div className='grid grid-cols-1 gap-4 lg:grid-cols-2'>
            <div className='p-4 bg-white rounded-2xl border border-red-800 shadow-xl'>
              <div className='flex justify-between items-center bg-red-900 p-4 rounded-tr-lg rounded-tl-lg'>
                <h2 className='text-2xl font-medium text-white'>
                  {' '}
                  {charDetails?.name}
                </h2>
                <Tooltip
                  content={charDetails?.details?.popularity}
                  animation='duration-500'
                >
                  <TiHeart
                    className='text-white text-3xl'
                    onClick={() => {
                      handlePopularity(id);
                    }}
                  />
                </Tooltip>
              </div>
              <img
                src={charDetails?.photo}
                className='w-full rounded-bl-lg rounded-br-lg'
              />
              <div className='my-2'>
                <div className='bg-[#f6ecec] p-4 mb-2 rounded-lg'>
                  <p className='text-red-900 font-medium text-base'>
                    {charDetails?.details?.introduction}
                  </p>
                </div>
                <p className='text-black font-bold text-sm'>
                  Created at{' '}
                  {convertToReadableFormat(charDetails?.details?.created_at)}
                </p>

                <div className='grid grid-cols-2 gap-1 my-2 lg:grid-cols-2'>
                  {charDetails &&
                    charDetails?.details?.tags?.length &&
                    charDetails?.details?.tags?.map((tag, ind) => (
                      <div
                        className='flex justify-center items-center border border-red-900 text-[15px] text-center font-medium rounded-md text-red-900 py-1 bg-white hover:bg-[#f6ecec] cursor-pointer'
                        key={`tag_id_${ind}`}
                      >
                        {tag.tag_name}
                        {/* <Tooltip
                          content='For Big Sister - click to View More'
                          animation='duration-500'
                        >
                          {' '}
                          
                        </Tooltip> */}
                      </div>
                    ))}
                </div>

                {/* <div className='flex justify-center items-center border border-red-900 text-[15px] text-center font-medium rounded-md text-red-900 py-1 bg-white hover:bg-[#f6ecec] cursor-pointer'>
                    <Tooltip
                      content='Male characters - click to View More'
                      animation='duration-500'
                    >
                      <div className='flex justify-center items-center'>
                        <FcBusinessman className='text-xl mr-1' />
                        Male
                      </div>
                    </Tooltip>
                  </div>
                  <div className='flex justify-center items-center border border-red-900 text-[15px] text-center font-medium rounded-md text-red-900 py-1 bg-white hover:bg-[#f6ecec] cursor-pointer'>
                    <Tooltip
                      content='Fictional characters - click to View More'
                      animation='duration-500'
                    >
                      <div className='flex justify-center items-center'>
                        <FcReadingEbook className='text-xl mr-1' />
                        Fictional
                      </div>
                    </Tooltip>
                  </div>
                  <div className='flex justify-center items-center border border-red-900 text-[15px] text-center font-medium rounded-md text-red-900 py-1 bg-white hover:bg-[#f6ecec] cursor-pointer'>
                    <Tooltip
                      content='Original characters - click to View More'
                      animation='duration-500'
                    >
                      <div className='flex justify-center items-center'>
                        <FcBusinessman className='text-xl mr-1' />
                        OC
                      </div>
                    </Tooltip>
                  </div> */}
                <Link
                  to='/chat'
                  state={{ id: id, charDetails: charDetails?.details }}
                  className='flex justify-center items-center create_character_btn w-full mb-0 text-sm text-white uppercase rounded-full h-11 '
                >
                  <AiFillWechat className='text-xl mr-2' />
                  Chat with {charDetails?.name}
                  <FcLock className='text-xl ml-2' />
                </Link>
              </div>
            </div>
            <div className='px-4'>
              {/* <div className='flex justify-between items-center'>
                <h3 className='text-2xl text-red-900 font-medium'>More</h3>
                <div className='flex'>
                  <button className='flex justify-center items-center mr-2 bg-black text-white px-4 py-2 text-sm rounded-md hover:bg-red-900'>
                    <AiOutlineCloseCircle className='mr-1' />
                    Block
                  </button>
                  <button className='flex justify-center items-center mr-0 bg-red-900 text-white px-4 py-2 text-sm rounded-md hover:bg-black'>
                    <AiFillWarning className='mr-1' />
                    Report
                  </button>
                </div>
              </div> */}
              <div className='p-3 my-4 bg-white rounded-md shadow-xl'>
                <Accordion>
                  <Accordion.Panel>
                    <Accordion.Title className='p-3 text-sm font-medium bg-red-900 text-white hover:bg-black'>
                      Personality
                    </Accordion.Title>
                    <Accordion.Content className='p-3 bg-gray-700'>
                      <div className='bg-gray-800 rounded-md p-3'>
                        <p className='text-white'>
                          {charDetails?.details?.personality}
                        </p>
                      </div>
                      {/* <div className='bg-gray-800 rounded-md p-3'>
                        <p className='flex items-center text-white font-medium text-sm mb-4'>
                          72 reviews (71{' '}
                          <AiFillLike className='ml-1 text-green-500' /> , 1{' '}
                          <AiFillDislike className='ml-1 text-red-700' /> )
                        </p>
                        <ul>
                          <li className='flex items-start border-t border-gray-700 py-2'>
                            <div className='w-10 h-10 mr-2'>
                              <img
                                src={userFace}
                                className='rounded-full w-full'
                              />
                            </div>
                            <div className='w-full'>
                              <span className='flex items-center text-white font-normal text-sm'>
                                Roseeei{' '}
                                <AiFillLike className='ml-1 text-green-500' />
                              </span>
                            </div>
                          </li>
                          <li className='flex items-start border-t border-gray-700 py-2'>
                            <div className='w-10 h-10 mr-2'>
                              <img
                                src={userFace}
                                className='rounded-full w-full'
                              />
                            </div>
                            <div className='w-full'>
                              <span className='flex items-center text-white font-normal text-sm'>
                                vxbots
                                <AiFillLike className='ml-1 text-green-500' />
                              </span>
                            </div>
                          </li>
                          <li className='flex items-start border-t border-gray-700 py-2'>
                            <div className='w-10 h-10 mr-2'>
                              <img
                                src={userFace}
                                className='rounded-full w-full'
                              />
                            </div>
                            <div className='w-full'>
                              <span className='flex items-start text-white font-normal text-sm'>
                                LumiLemon
                                <AiFillLike className='ml-1 text-green-500' />
                              </span>
                              <p className='text-zinc-400 font-normal text-sm'>
                                the good thing is that it works well with oter
                                API in case of j. LLM (love him😋💕)
                              </p>
                            </div>
                          </li>
                          <li className='flex items-start border-t border-gray-700 py-2'>
                            <div className='w-10 h-10 mr-2'>
                              <img
                                src={userFace}
                                className='rounded-full w-full'
                              />
                            </div>
                            <div className='w-full'>
                              <span className='flex items-start text-white font-normal text-sm'>
                                Vane-Kero
                                <AiFillLike className='ml-1 text-green-500' />
                              </span>
                              <p className='text-zinc-400 font-normal text-sm'>
                                His hands r lowkey scary in the picture… 💀
                              </p>
                            </div>
                          </li>
                          <li className='flex items-start border-t border-gray-700 py-2'>
                            <div className='w-10 h-10 mr-2'>
                              <img
                                src={userFace}
                                className='rounded-full w-full'
                              />
                            </div>
                            <div className='w-full'>
                              <span className='flex items-start text-white font-normal text-sm'>
                                Lil_booty_tickler
                                <AiFillLike className='ml-1 text-green-500' />
                              </span>
                              <p className='text-zinc-400 font-normal text-sm'>
                                IRISH TAP DANCING😭
                              </p>
                            </div>
                          </li>
                        </ul>
                      </div> */}
                    </Accordion.Content>
                  </Accordion.Panel>
                  <Accordion.Panel>
                    <Accordion.Title className='p-3 text-sm font-medium bg-red-900 text-white hover:bg-black'>
                      Introduction
                    </Accordion.Title>
                    <Accordion.Content className='p-3 bg-gray-700'>
                      <div className='bg-gray-800 rounded-md p-3'>
                        {/* <p className='text-center text-zinc-500 font-medium text-xs mb-0'>
                          No public chat yet.
                        </p> */}
                        <p className='text-white'>
                          {charDetails?.details?.introduction}
                        </p>
                      </div>
                    </Accordion.Content>
                  </Accordion.Panel>
                  <Accordion.Panel>
                    <Accordion.Title className='p-3 text-sm font-medium bg-red-900 text-white hover:bg-black'>
                      Tags
                    </Accordion.Title>
                    <Accordion.Content className='p-3 bg-gray-700'>
                      <div className='bg-gray-800 rounded-md p-3'>
                        {/* <p className='text-center text-zinc-500 font-medium text-xs mb-0'>
                          No public chat yet.
                        </p> */}
                        <p className='text-white'>
                          {charDetails?.details?.tags.map(
                            (tag, ind) =>
                              tag.secondary_tag === 0 && (
                                <p key={`tag_${ind}`}>{tag.tag_name} &nbsp; </p>
                              )
                          )}
                        </p>
                      </div>
                    </Accordion.Content>
                  </Accordion.Panel>
                </Accordion>
              </div>
            </div>
          </div>
        </div>
      </div>
      {/* CharacterDetails section ends here */}
    </div>
  );
};

export default CharacterDetails;
