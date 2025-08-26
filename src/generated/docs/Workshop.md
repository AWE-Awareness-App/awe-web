# Workshop


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**id** | **string** |  | [optional] [default to undefined]
**name** | **string** |  | [default to undefined]
**description** | **string** |  | [default to undefined]
**imageUrl** | **string** |  | [optional] [default to undefined]
**durationText** | **string** |  | [default to undefined]
**maxSeats** | **number** |  | [default to 100]
**startDate** | **string** |  | [default to undefined]
**price** | **number** |  | [default to undefined]
**bookingUrl** | **string** |  | [default to undefined]
**type** | **string** |  | [default to TypeEnum_Individual]
**counsellor** | [**WorkshopCounsellor**](WorkshopCounsellor.md) |  | [optional] [default to undefined]
**createdAt** | **string** |  | [optional] [readonly] [default to undefined]
**updatedAt** | **string** |  | [optional] [readonly] [default to undefined]

## Example

```typescript
import { Workshop } from './api';

const instance: Workshop = {
    id,
    name,
    description,
    imageUrl,
    durationText,
    maxSeats,
    startDate,
    price,
    bookingUrl,
    type,
    counsellor,
    createdAt,
    updatedAt,
};
```

[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)
