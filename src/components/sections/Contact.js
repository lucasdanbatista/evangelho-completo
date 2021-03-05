import React from 'react';
import classNames from 'classnames';
import { SectionTilesProps } from '../../utils/SectionProps';
import SectionHeader from './partials/SectionHeader';

const propTypes = {
    ...SectionTilesProps.types
}

const defaultProps = {
    ...SectionTilesProps.defaults
}

const Contact = ({
    className,
    topOuterDivider,
    bottomOuterDivider,
    topDivider,
    bottomDivider,
    hasBgColor,
    invertColor,
    pushLeft,
    ...props
}) => {

    const outerClasses = classNames(
        'testimonial section',
        topOuterDivider && 'has-top-divider',
        bottomOuterDivider && 'has-bottom-divider',
        hasBgColor && 'has-bg-color',
        invertColor && 'invert-color',
        className
    );

    const innerClasses = classNames(
        'testimonial-inner section-inner',
        topDivider && 'has-top-divider',
        bottomDivider && 'has-bottom-divider'
    );

    const sectionHeader = {
        title: 'Contato',
        paragraph: 'Saiba como e onde nos encontrar:'
    };

    return (
        <section
            {...props}
            className={outerClasses}
        >
            <div className="container">
                <div className={innerClasses}>
                    <SectionHeader data={sectionHeader} className="center-content" />
                    <div>
                        <p>WhatsApp: <a href="https://api.whatsapp.com/send?phone=5547999616373" target="_blank">(47) 99961-6373</a>
                        </p>
                        <p>E-mail: <a href="mailto:contato@evangelhocompleto.org">contato@evangelhocompleto.org</a></p>
                        <p>Endereço: <a href="https://goo.gl/maps/KgTXcdGJPUL3MZhJ8" target="_blank">
                            R. João Sebastião Domingos, 135, B. Nova Esperança,<br />Balneário Camboriú - SC
                            </a>
                        </p>
                    </div>
                </div>
            </div>
        </section>
    );
}

Contact.propTypes = propTypes;
Contact.defaultProps = defaultProps;

export default Contact;