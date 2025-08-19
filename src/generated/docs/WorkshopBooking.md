# WorkshopBooking


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**id** | **string** |  | [default to undefined]
**workshopId** | **string** |  | [optional] [default to undefined]
**userId** | **string** |  | [optional] [default to undefined]
**nbSeats** | **number** |  | [default to undefined]
**createdAt** | **string** |  | [optional] [readonly] [default to undefined]
**updatedAt** | **string** |  | [optional] [readonly] [default to undefined]
**user** | [**User**](User.md) |  | [default to undefined]
**workshop** | [**Workshop**](Workshop.md) |  | [default to undefined]

## Example

```typescript
import { WorkshopBooking } from './api';

const instance: WorkshopBooking = {
    id,
    workshopId,
    userId,
    nbSeats,
    createdAt,
    updatedAt,
    user,
    workshop,
};
```

[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)
