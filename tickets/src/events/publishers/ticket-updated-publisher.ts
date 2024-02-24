import {
  Publisher,
  Subjects,
  TicketUpdatedEvent,
} from "@code-artist-packages/microservices-common";

export class TicketUpdatedPublisher extends Publisher<TicketUpdatedEvent> {
  readonly subject = Subjects.TicketUpdated;
}
