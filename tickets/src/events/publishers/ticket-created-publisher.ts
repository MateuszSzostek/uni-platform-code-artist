import {
  Publisher,
  Subjects,
  TicketCreatedEvent,
} from "@code-artist-packages/microservices-common";

export class TicketCreatedPublisher extends Publisher<TicketCreatedEvent> {
  readonly subject = Subjects.TicketCreated;
}
