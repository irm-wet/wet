import axios from 'axios';

export const axiosInstance = axios.create({
  headers: {
    Authorization:
      'Bearer eyJ0eXAiOiJKV1QiLCJhbGciOiJSUzI1NiJ9.eyJqdGkiOiJhZjNlMDI4NjBiYWZmNWFmNGE0MmVlNDQ4ZGM4NDhkZDY4YjBkZTFiYWY0ZGM4NzkzODA3YzVlZjliODYzMzNmIiwiY2xpZW50X2lkIjoiZGV2LmlybWJlc3RpbWFnZSIsImlhdCI6MTY5OTUwOTY3MiwiZXhwIjoxNjk5NTQ1NjcyLCJzdWIiOiJibTAxQGlybS5rciIsInVzZXJuYW1lIjoiYm0wMUBpcm0ua3IiLCJpc3MiOiJvYXV0aDItZGV2LmlybS5rciIsInNjb3BlIjoicmVmcmVzaFRva2VuIiwiZ3JhbnRfdHlwZSI6ImF1dGhvcml6YXRpb25fY29kZSIsImF1dGhvcml6YXRpb25fY29kZSI6ImQwNjRlODI2NzE2ZjM0ZTU4NzllYjBkNzI3YjViODRmMTllZjM3ZTNhNThhMTg4MmExYWQ1ZDFmZTBkZmMzMDYiLCJjb2RlX3ZlcmlmaWVyIjoiMzY0MWEyZDEyZDY2MTAxMjQ5Y2RmN2E3OWMwMDBjMWY4YzA1ZDJhYWZjZjE0YmYxNDY0OTdiZWQiLCJlbWFpbCI6ImJtMDFAaXJtLmtyIiwiZXh0ZW5zaW9ucyI6eyJpaGVfaXVhIjp7InN1YmplY3RfbmFtZSI6ImJtMDFeYm0wMTEiLCJzdWJqZWN0X29yZ2FuaXphdGlvbiI6bnVsbCwic3ViamVjdF9vcmdhbml6YXRpb25faWQiOm51bGwsInN1YmplY3Rfcm9sZSI6eyJzeXN0ZW0iOm51bGwsImNvZGUiOm51bGwsImRpc3BsYXkiOm51bGx9LCJwdXJwb3NlX29mX3VzZSI6eyJzeXN0ZW0iOm51bGwsImNvZGUiOm51bGwsImRpc3BsYXkiOm51bGx9fX19.Ed7vlE4f1UQXta_qJIbw7AJk8uLfrOkok6K6WtOn5-u3jJ_CPxZLpP-nS-6c_hz58cld2YLQvb3ThZdTSrZtO3tC6TnWW6Z82-SpwDVtvTqjsp39t_UFZ17eC2bX_fToO3Q6nZ0FD2z5lzOVKHFqDM5ISBgoJv2J5S9O6pjUzDeduYe0Luf3WyZKu88rK5Y-mgGAp9veMML5r6jhb2odKFtCCb0HxSAg9bLlWbnFTnRRG0nQujCRV__fv_lwU8dN_vLfYpWyO1LtSRcJhaVtem4FvhhqvHEW5RTjFB-BSsJsknFTC5sU8Ko_5zg6Tm6NK7CBwBqaIgPuA31XdUWTNg',
  },
  baseURL: 'https://dev.irmbestimage.com/XDSServer',
});
