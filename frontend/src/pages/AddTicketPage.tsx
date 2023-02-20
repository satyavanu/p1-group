import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { addTicket } from '../store/tickets/actions';
import { AppState, Ticket } from '../store/tickets/types';


const AddTicketPage: React.FC = () => {
  const defaultValues: Ticket = {
    email: '',
    title: '',
    description: '',
    price: 0,
    amount: 1,
    supplier: ''
  };

  const [inputs, setInputs] = useState<Ticket>(defaultValues);
  const [success, setSuccessMessage] = useState(false);
  const [submit, setSubmit] = useState(false);
  const dispatch = useDispatch();
  const { error } = useSelector((state: AppState) => state);

  useEffect(() => {
    document.title = "Add Ticket";
  }, []);

  const handleChange = (event: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>): void => {
    const { name, value }: Record<string, any> = event.target;

    setInputs((values: Ticket) => ({ ...values, [name]: name === 'price' ? parseFloat(value) : value }))
  }

  const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    setSuccessMessage(false);
    setSubmit(true);
    dispatch(addTicket(inputs));
    setInputs(defaultValues);
    setSubmit(false);
    if (error === null) {
      setSuccessMessage(true);
    }
  };

  return (
    <>
      <h2> Add Ticket</h2>
      {success ? (<div className="success"><h3>Ticket Created Successfully</h3></div>) : ''}
      <form className="add-ticket-form" onSubmit={handleSubmit}>
        <div>
          <input type="email"
            name="email"
            placeholder="Email"
            required
            value={inputs.email || ""}
            onChange={handleChange} />
          {error?.message === 'ticket.email.invalid' && (
            <div className="form-error">{error.message}</div>
          )}
        </div>
        <div>
          <input type="text"
            name="title"
            placeholder="Title"
            required
            value={inputs.title || ""}
            onChange={handleChange} />
          {error?.message === 'ticket.title.invalid' && (
            <div className="form-error">{error.message}</div>
          )}
        </div>
        <div>
          <textarea
            name="description"
            rows={10}
            placeholder="Description (multi-line textarea)"
            required
            value={inputs.description || ""}
            onChange={handleChange} />
          {error?.message === 'ticket.description.invalid' && (
            <div className="form-error">{error.message}</div>
          )}
        </div>
        <div className="row">
          <div className="col">
            <input type="number"
              name="price"
              placeholder="Price"
              required
              value={inputs.price || ""}
              onChange={handleChange} />
            {error?.message === 'ticket.price.must.be.a.number' && (
              <div className="form-error">{error.message}</div>
            )}
          </div>
          <div className="col">
            <input type="number"
              name="amount"
              required
              placeholder="Amount"
              min="1" max="20"
              value={inputs.amount || ""}
              onChange={handleChange} />
            {error?.message === 'ticket.amount.must.be.a.number' && (
              <div className="form-error">{error.message}</div>
            )}
          </div>
        </div>
        <div>
          <input type="text"
            placeholder="Supplier"
            required
            name="supplier"
            value={inputs.supplier || ""}
            onChange={handleChange} />
          {error?.message === 'ticket.supplier.invalid' && (
            <div className="form-error">{error.message}</div>
          )}
        </div>
        <button type="submit" disabled={submit}>
          {submit ? 'Submitting...' : 'Add Ticket'}
        </button>
      </form>
    </>
  );
};

export default AddTicketPage;