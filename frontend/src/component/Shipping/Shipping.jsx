import React, { useEffect, useState } from 'react'
import { MdOutlineHomeWork } from 'react-icons/md'
import { IoHomeOutline } from 'react-icons/io5'
import { FaRoad } from 'react-icons/fa6'
import { FaMapMarkerAlt } from 'react-icons/fa'
import { getAddress } from '../../utils/utils'
import Map from '../Map/Map'
import Button from '../Button/Button'
import { useDispatch, useSelector } from 'react-redux'
import { getAddressShipping, setAddressDelivery } from '../../features/address/addressSlice'
import { useNavigate } from 'react-router-dom'

const Shipping = () => {
  const [districts, setDistricts] = useState([]);
  const [wards, setWards] = useState([]);
  const [selectedCity, setSelectedCity] = useState('');
  const [selectedDistrict, setSelectedDistrict] = useState('');
  const [selectedWard, setSelectedWard] = useState('')
  const [address, setAddress] = useState("")
  const [inputAddress, setInputAddress] = useState('')

  const dispatch = useDispatch()
  const navigate = useNavigate()

  const addressState = useSelector((state) => state?.address?.address?.data)

  useEffect(() => {
    dispatch(getAddressShipping())
  }, [dispatch])

  useEffect(() => {
    dispatch(setAddressDelivery(address))
  }, [address])

  const handleCityChange = (e) => {
    const selectedCityId = e.target.value;
    setSelectedCity(selectedCityId);
    const selectedCityData = addressState.find((city) => city.Id === selectedCityId);
    setDistricts(selectedCityData?.Districts || []);
    setWards([]);
    setAddress(selectedCityData.Name)
  };

  const handleDistrictChange = (e) => {
    const selectedDistrictId = e.target.value;
    setSelectedDistrict(selectedDistrictId);
    const selectedDistrictData = districts.find((district) => district.Id === selectedDistrictId) || {};
    setWards(selectedDistrictData.Wards || []);
    setAddress((prevAddress) => selectedDistrictData.Name + ', ' + prevAddress);
  };

  const handleWarsChange = (e) => {
    const selectedWardId = e.target.value;
    setSelectedWard(selectedWardId)
    const selectedWardData =
      wards.find((ward) => ward.Id === selectedWardId) || {};
    setAddress((prevAddress) => selectedWardData.Name + ', ' + prevAddress);
  }

  const handleClickSave = () => {
    if (inputAddress) {
      setAddress((prevAddress) => inputAddress + ', ' + prevAddress);
    }
  }

  const handlePayment = (address) => {
    dispatch(setAddressDelivery(address))
    navigate('/cart/payment')
  }
  return (
    <div>
      <div class="my-10 bg-gray-50 px-4 pt-8 lg:mt-0">
        <p class="text-xl font-medium">Shipping</p>
        <p class="text-gray-400">Complete your order by providing your shipping address.</p>
        <div class="">
          <div className='flex'>
            <div className='w-1/2 mr-2'>
              <label for="billing-address" class="mt-4 mb-2 block text-sm font-medium">Country</label>
              <div class="flex flex-col sm:flex-row">
                <div class="relative flex-shrink-0 w-full">
                  <select type="text" id="billing-address" class="w-full rounded-md border border-gray-200 px-4 py-3 pl-11 text-sm shadow-sm outline-none focus:z-10 focus:border-blue-500 focus:ring-blue-500">
                    <option value="State">Vietnamese</option>
                  </select>
                  <div class="pointer-events-none absolute inset-y-0 left-0 inline-flex items-center px-3">
                    <img class="h-4 w-4 object-contain" src="https://emojigraph.org/media/facebook/flag-vietnam_1f1fb-1f1f3.png" alt="" />
                  </div>
                </div>
              </div>
            </div>

            <div className='w-1/2 ml-2'>
              <label for="email" class="mt-4 mb-2 block text-sm font-medium">Province</label>
              <div class="relative">
                <select type="text" id="email" className="w-full rounded-md border border-gray-200 px-4 py-3 pl-11 text-sm shadow-sm outline-none focus:z-10 focus:border-blue-500 focus:ring-blue-500"
                  value={selectedCity}
                  onChange={handleCityChange}
                >
                  <option value="" selected>
                    Select Province
                  </option>
                  {addressState?.map((city) => (
                    <option key={city.Id} value={city.Id}>
                      {city.Name}
                    </option>
                  ))}
                </select>
                <div class="pointer-events-none absolute inset-y-0 left-0 inline-flex items-center px-3">
                  <MdOutlineHomeWork class="h-4 w-4 text-gray-400" />
                </div>
              </div>
            </div>
          </div>

          <div className='flex'>
            <div className='w-1/2 mr-2'>
              <label for="email" class="mt-4 mb-2 block text-sm font-medium">District</label>
              <div class="relative">
                <select type="text" id="email" className="w-full rounded-md border border-gray-200 px-4 py-3 pl-11 text-sm shadow-sm outline-none focus:z-10 focus:border-blue-500 focus:ring-blue-500"
                  value={selectedDistrict}
                  onChange={handleDistrictChange}
                >
                  <option value="" selected>
                    Select District
                  </option>
                  {districts?.map((district) => (
                    <option key={district.Id} value={district.Id}>
                      {district.Name}
                    </option>
                  ))}
                </select>
                <div class="pointer-events-none absolute inset-y-0 left-0 inline-flex items-center px-3">
                  <IoHomeOutline class="h-4 w-4 text-gray-400" />
                </div>
              </div>
            </div>

            <div className='w-1/2 ml-2'>
              <label for="email" class="mt-4 mb-2 block text-sm font-medium">Wards</label>
              <div class="relative">
                <select type="text" id="email" className="w-full rounded-md border border-gray-200 px-4 py-3 pl-11 text-sm shadow-sm outline-none focus:z-10 focus:border-blue-500 focus:ring-blue-500"
                  value={selectedWard}
                  onChange={handleWarsChange}
                >
                  <option value="" selected>
                    Select Ward
                  </option>
                  {wards?.map((ward) => (
                    <option key={ward.Id} value={ward.Id}>
                      {ward.Name}
                    </option>
                  ))}
                </select>
                <div class="pointer-events-none absolute inset-y-0 left-0 inline-flex items-center px-3">
                  <FaRoad class="h-4 w-4 text-gray-400" />
                </div>
              </div>
            </div>
          </div>
          <div>
            <label for="card-holder" class="mt-4 mb-2 block text-sm font-medium">Specific address</label>
            <div class="relative">
              <input type="text" id="card-holder" name="card-holder" class="w-full rounded-md border border-gray-200 px-4 py-3 pl-11 text-sm uppercase shadow-sm outline-none focus:z-10 focus:border-blue-500 focus:ring-blue-500" placeholder="Specific address"
                onChange={(e) => setInputAddress(e.target.value)}
                value={inputAddress}
                onBlur={handleClickSave}
              />
              <div class="pointer-events-none absolute inset-y-0 left-0 inline-flex items-center px-3">
                <FaMapMarkerAlt class="h-4 w-4 text-gray-400" />
              </div>
            </div>
          </div>

          <label for="card-no" class="mt-4 mb-2 block text-sm font-medium">Map</label>
          <div class="flex">
            <div class="relative w-full flex-shrink-0">
              <Map address={address} />
            </div>
          </div>

        </div>
        <div className='w-full mt-6 h-12 text-base font-medium' onClick={() => handlePayment(address)}>
          <Button name='Place Order' />
        </div>
      </div>
    </div>
  )
}

export default Shipping