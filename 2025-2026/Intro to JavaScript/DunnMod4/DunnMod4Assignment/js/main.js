$(function () {

    $('#form-choice').on('change', function (e) {
        e.preventDefault();
        $('.management-form > form').addClass('hidden');
        $('#' + this.value + '-form').removeClass('hidden');
    })

    $('.tabs').on('click', function(e){
        e.preventDefault();
        
        // $ as the prefix for variables that hold JQuery objects
        const $target = $(e.target);

        // use JQuery to get the value of the 'tab' data attribute
        // -data method gives us the value of the data attribute
        const tabName = $target.data('tab')

        if(tabName) // undefined is falsy
        {
            if(tabName == 'view-employees')
            {
                $('.supplier-list').addClass('hidden')
                $('.customer-list').addClass('hidden')
                $('.employee-list').removeClass('hidden')
                $('.tabs .active').removeClass('active')
                $target.addClass('active')
            }
            else if (tabName == 'view-suppliers')
            {
                $('.employee-list').addClass('hidden')
                $('.customer-list').addClass('hidden')
                $('.supplier-list').removeClass('hidden')
                $('.tabs .active').removeClass('active')
                $target.addClass('active')
            }
            else if (tabName == 'view-customers')
            {
                $('.employee-list').addClass('hidden')
                $('.supplier-list').addClass('hidden')
                $('.customer-list').removeClass('hidden')
                $('.tabs .active').removeClass('active')
                $target.addClass('active')
            }
            else if (tabName == 'view-all-data')
            {
                $('.employee-list').removeClass('hidden')
                $('.supplier-list').removeClass('hidden')
                $('.customer-list').removeClass('hidden')
                $('.tabs .active').removeClass('active')
                $target.addClass('active')
            }
        }         
    })

    // Employee Constructor
    function Employee(employeeID, firstName, lastName, email, department, hireDate, terminationDate) {
        this.employeeID = employeeID;
        this.firstName = firstName;
        this.lastName = lastName;
        this.email = email;
        this.department = department;
        this.hireDate = hireDate.toLocaleDateString();
        
        if (terminationDate) {
            this.terminationDate = terminationDate.toLocaleDateString();
        } else {
            this.terminationDate = 'NONE';
        }
        this.createElement = function () {

            const employeeElement = document.createElement('div');
            employeeElement.classList.add('employee');

            employeeElement.innerHTML =
                `
        <div class="employee-data">
            <span class="employee-id">${this.employeeID}</span>
            <span class="employee-name">${this.firstName} ${this.lastName}</span>
            <span class="employee-email">Email: ${this.email}</span>
            <span class="employee-department">${this.department}</span>
            <span type="date" class="employee-hire-date">Hired on: ${this.hireDate}</span>
            <span type="date" class="employee-termination-date">Terminated on: ${this.terminationDate}</span>
        </div>
        `
            return employeeElement;
        }
    };
    // Employee Array
    const allEmployees = [
        new Employee(38647, 'Patricia', 'Barber', 'pbarber@company.com', 'Sales', new Date('2005-1-23'), new Date('2015-1-1')),
        new Employee(72102, 'Kimberley', 'Berry', 'kberry@company.com', 'Manufacturing', new Date('2007-06-21'), new Date('2016-05-01')),
        new Employee(36693, 'Burton', 'Miles', 'bmiles@company.com', 'Manufacturing', new Date('2009-03-01'), new Date('2017-03-15')),
        new Employee(58000, 'Rosa', 'Smith', 'rsmith@company.com', 'Sales', new Date('2012-09-26'), new Date('2018-08-15')),
        new Employee(54929, 'Jane', 'Pruitt', 'jpruitt@company.com', 'Manufacturing', new Date('2015-04-01'), null),
        new Employee(24612, 'Regina', 'Suarez', 'rsuarez@company.com', 'Manufacturing', new Date('2018-11-01'), null),
        new Employee(68392, 'Monroe', 'Carr', 'mcarr@company.com', 'Manufacturing', new Date('2019-01-11'), null),
        new Employee(73604, 'Lonny', 'Contreras', 'lcontreras@company.com', 'HR', new Date('2020-02-24'), null),
        new Employee(37640, 'Alba', 'Guzman', 'aguzman@company.com', 'Manufacturing', new Date('2021-03-10'), null),
        new Employee(61036, 'Drew', 'Cowan', 'dcowan@company.com', 'Manufacturing', new Date('2021-04-04'), null),
        new Employee(33211, 'Ike', 'Wyatt', 'iwyatt@company.com', 'HR', new Date('2021-05-06'), null)
    ];

    // Employee List
    const $employeesList = $('.employee-list')
    $(allEmployees).each(function (i, employee) {
        $employeesList.append(employee.createElement())
    })

    // Employee Form
    $('#employee-form').on('submit', function (e) {
        e.preventDefault();
        const employeeID = $('#employee-id').val();
        const employeeFirstName = $('#employee-first-name').val();
        const employeeLastName = $('#employee-last-name').val();
        const employeeEmail = $('#employee-email').val();
        const employeeDepartment = $('#employee-department').val();
        const employeeHireDate = $('#employee-hire-date').val();
        const employeeTerminationDate = $('#employee-termination-date').val();
        const newEmployee = new Employee(employeeID,
            employeeFirstName,
            employeeLastName,
            employeeEmail,
            employeeDepartment,
            employeeHireDate,
            employeeTerminationDate);
        allEmployees.push(newEmployee);
        $employeesList.append(newEmployee.createElement());
        this.reset();
    })




    // Supplier Constructor
    function Supplier(supplierID, companyName, zipCode, contactFirstName, contactLastName, contactEmail, lastDeliveryDate, isActive) {
        this.supplierID = supplierID;
        this.companyName = companyName;
        this.zipCode = zipCode;
        this.contactFirstName = contactFirstName;
        this.contactLastName = contactLastName;
        this.contactEmail = contactEmail;
        this.lastDeliveryDate = lastDeliveryDate.toLocaleDateString();
        this.isActive = isActive;
        this.createElement = function () {
            const supplierElement = document.createElement('div');

            supplierElement.classList.add('supplier');

            supplierElement.innerHTML =
                `
        <div class="supplier-data">
            <span class="supplier-id">${this.supplierID}</span>
            <span class="supplier-company">${this.companyName}</span>
            <span class="supplier-zip">${this.zipCode}</span>
            <span class="supplier-contact">${this.contactFirstName} ${this.contactLastName}</span>
            <span class="supplier-email">Email: ${this.contactEmail}</span>
            <span class="supplier-last-delivery-date">Last Delivery: ${this.lastDeliveryDate}</span>
            <span class="supplier-status">Active: ${this.isActive}</span>
        </div>
        `
            return supplierElement;
        }
    };
    // Supplier Array
    const allSuppliers = [
        new Supplier('ACMED34234', 'ACME Inc.', '34234', 'John', 'Doe', 'jdoe@acmeinc.com', new Date('2021-08-01'), false),
        new Supplier('BESTC23532', 'Best Company', '23532', 'Jane', 'Smith', 'jsmith@bestcompany.com', new Date('2022-02-15'), true),
        new Supplier('COOLS53462', 'Cool Corp', '53462', 'Bob', 'Johnson', 'bjohnson@coolcorp.com', new Date('2022-05-20'), true),
        new Supplier('DELTA23743', 'Delta LLC', '23743', 'Alice', 'Brown', 'abrown@deltallc.com', new Date('2023-01-01'), true),
        new Supplier('EXCEL34865', 'Excel Enterprises', '34865', 'Tom', 'Wilson', 'twilson@excelenterprises.com', new Date('2023-06-30'), true),
        new Supplier('FRESH34235', 'Fresh Foods', '34235', 'Sara', 'Lee', 'slee@freshfoods.com', new Date('2020-05-01'), false),
    ];
    // Supplier List
    const $supplierList = $('.supplier-list')
    $(allSuppliers).each(function (i, supplier) {
        $supplierList.append(supplier.createElement())
    })

    // Supplier Form
    $('#supplier-form').on('submit', function (e) {
        e.preventDefault();
        const supplierID = $('#supplier-id').val();
        const companyName = $('#company-name').val();
        const zipCode = $('#zip-code').val();
        const contactFirstName = $('#contact-first-name').val();
        const contactLastName = $('#contact-last-name').val();
        const contactEmail = $('#contact-email').val();
        const lastDeliveryDate = $('#last-delivery-date').val();
        const isActive = $('#is-active').is(':checked');
        const newSupplier = new Supplier(supplierID,
            companyName,
            zipCode,
            contactFirstName,
            contactLastName,
            contactEmail,
            lastDeliveryDate,
            isActive);
        allSuppliers.push(newSupplier);
        $supplierList.append(newSupplier.createElement());
        this.reset();
    })




    // Customer Constructor
    function Customer(customerID, firstName, lastName, email, phone, isPremium, registrationDate) {
        this.customerID = customerID;
        this.firstName = firstName;
        this.lastName = lastName;
        this.email = email;
        this.phone = phone;
        this.isPremium = isPremium;
        this.registrationDate = registrationDate.toLocaleDateString();
        this.createElement = function () {
            const customerElement = document.createElement('div');

            customerElement.classList.add('customer');

            customerElement.innerHTML =
                `
        <div class="customer-data">
            <span class="customer-id">${this.customerID}</span>
            <span class="customer-name">${this.firstName} ${this.lastName}</span>
            <span class="customer-email">Email: ${this.email}</span>
            <span class="customer-phone">Phone: ${this.phone}</span>
            <span class="customer-premium">Premium: ${this.isPremium}</span>
            <span class="customer-registration-date">Registered: ${this.registrationDate}</span>
        </div>
        `
            return customerElement;
        }
    };
    // Customer Array
    const allCustomers = [
        new Customer(9690528, 'Rickey', 'Key', 'rickeykey@sample.com', '578-708-7817', false, new Date('2023-08-11')),
        new Customer(3985939, 'Clarissa', 'Singleton', 'clarissasingleton@sample.com', '339-593-1528', true, new Date('2023-07-01')),
        new Customer(6268069, 'Domenic', 'Maldonado', 'domenicmaldonado@sample.com', '959-706-4190', false, new Date('2023-06-14')),
        new Customer(3868672, 'Isiah', 'Lowery', 'isiahlowery@test.com', '945-715-3043', true, new Date('2022-05-17')),
        new Customer(5880281, 'Evangeline', 'Figueroa', 'evangelinefigueroa@example.com', '526-803-4658', false, new Date('2023-04-01')),
        new Customer(5916088, 'Mabel', 'Prince', 'mabelprince@test.com', '422-381-8753', true, new Date('2022-03-15')),
        new Customer(5405271, 'Bret', 'Melendez', 'bretmelendez@example.com', '877-575-2516', false, new Date('2023-02-18')),
        new Customer(9239813, 'Robby', 'Haley', 'robbyhaley@trial.com', '601-387-5361', false, new Date('2021-01-21')),
        new Customer(2861338, 'Michelle', 'Lawson', 'michellelawson@test.com', '347-376-8539', false, new Date('2020-12-30')),
    ];
    // Customer List
    const $customerList = $('.customer-list')
    $(allCustomers).each(function (i, customer) {
        $customerList.append(customer.createElement())
    })

    // Customer Form
    $('#customer-form').on('submit', function (e) {
        e.preventDefault();
        const customerID = $('#customer-id').val();
        const firstName = $('#customer-first-name').val();
        const lastName = $('#customer-last-name').val();
        const email = $('#customer-email').val();
        const phone = $('#customer-phone').val();
        const isPremium = $('#is-premium').is(':checked');
        const registrationDate = $('#registration-date').val();
        const newCustomer = new Customer(customerID,
            firstName,
            lastName,
            email,
            phone,
            isPremium,
            registrationDate);
        allCustomers.push(newCustomer);
        $customerList.append(newCustomer.createElement());
        this.reset();
    })

});