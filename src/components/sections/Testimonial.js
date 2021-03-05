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

const Testimonial = ({
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

  const tilesClasses = classNames(
    'tiles-wrap',
    pushLeft && 'push-left'
  );

  const sectionHeader = {
    title: 'Testemunhos',
    paragraph: 'Histórias que inspiram:'
  };

  return (
    <section
      {...props}
      className={outerClasses}
    >
      <div className="container">
        <div className={innerClasses}>
          <SectionHeader data={sectionHeader} className="center-content" />
          <div className={tilesClasses}>

            <div className="tiles-item reveal-from-right" data-reveal-delay="200">
              <div className="tiles-item-inner">
                <div className="testimonial-item-content">
                  <p className="text-sm mb-0">
                    Quando aceitou a Mensagem nossa Irmã ainda fumava e o Pastor Jorge Reis batizou ela mesmo assim. Após seu desejo de parar com o vício, convidou o Pastor e a irmã Socorro para irem em sua casa para orar por essa causa, na ocasião foram juntos a irmã Cristiane e Debora. Após 2 dias da visita Vera nunca mais fumou para honra e glória do Senhor Jesus Cristo!
                      </p>
                </div>
                <div className="testimonial-item-footer text-xs mt-32 mb-0 has-top-divider">
                  <span className="testimonial-item-name text-color-high">Ir. Vera</span>
                </div>
              </div>
            </div>

            <div className="tiles-item reveal-from-bottom">
              <div className="tiles-item-inner">
                <div className="testimonial-item-content">
                  <p className="text-sm mb-0">
                    Nascido e batizado na Mensagem em Chapecó, Edinei se desviou aos 16 anos e veio morar em Balneário Camboriú, após uma queda de moto que por Deus não perdeu sua vida, decidiu visitar a igreja da cidade onde o Pastor Jorge Reis ministrava. No seu terceiro culto de visita, o Pastor, por inspiração, comprimenta o irmão Edinei e convida ele para chegar perto ao púlpito e o abraça. Após esse ato, Edinei sente a presença de Deus e reconcilia, voltando aos caminho do Senhor Jesus Cristo.
                      </p>
                </div>
                <div className="testimonial-item-footer text-xs mt-32 mb-0 has-top-divider">
                  <span className="testimonial-item-name text-color-high">Ir. Edinei</span>
                </div>
              </div>
            </div>

            <div className="tiles-item reveal-from-left" data-reveal-delay="200">
              <div className="tiles-item-inner">
                <div className="testimonial-item-content">
                  <p className="text-sm mb-0">
                    Diagnósticado com Câncer, nosso jovem Abimael enfrentou com muita fé uma caminhada difícil e com muitos problemas e adversidades. Com persistência em jejum e oração de toda a família e irmãos da igreja, foi curado em Nome do Senhor Jesus Cristo!
                      </p>
                </div>
                <div className="testimonial-item-footer text-xs mt-32 mb-0 has-top-divider">
                  <span className="testimonial-item-name text-color-high">Ir. Abimael</span>
                </div>
              </div>
            </div>

          </div>
        </div>
      </div>
    </section>
  );
}

Testimonial.propTypes = propTypes;
Testimonial.defaultProps = defaultProps;

export default Testimonial;